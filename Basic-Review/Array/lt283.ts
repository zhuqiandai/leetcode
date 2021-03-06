/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): number[] {
  let left = 0
  let right = 0
  while (right < nums.length) {
    if (nums[right] !== 0) {
      ;[nums[right], nums[left]] = [nums[left], nums[right]]
      left += 1
    }
    right += 1
  }
  return nums
}
