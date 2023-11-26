import { describe, it, vi, expect, Mock, beforeAll, afterEach } from "vitest";
import { useGetGeoJson } from "./useGetGeoJson";
import { renderHook, waitFor } from "@testing-library/react";

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    text: () => Promise.resolve("test"),
  })
) as Mock;

describe("useGetGeoJson", () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should get data from api after 1500ms", () => {
    renderHook(() => useGetGeoJson("test", () => {}));
    vi.advanceTimersByTime(1000);
    expect(global.fetch).toHaveBeenCalledTimes(0);
    vi.advanceTimersByTime(2000);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it("should change loading value from true to false after getting data", async () => {
    const hook = renderHook(() => useGetGeoJson("test", vi.fn()));
    expect(hook.result.current[0]).toEqual(true);
    waitFor(() => expect(hook.result.current[0]).toEqual(false));
  });
});
