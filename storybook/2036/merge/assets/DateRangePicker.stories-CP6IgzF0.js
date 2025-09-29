import{j as r}from"./iframe-skRbRPoL.js";import{a as h,u as x,F as j,t as D}from"./Form-Bp5psqD5.js";import{L as e}from"./Label-Cq3I2A96.js";import{B as s}from"./Button-Dz0DuBiT.js";import{S}from"./Section-DOyYK0OC.js";import{A as R}from"./ActionGroup-DcKdxNCn.js";import{s as g}from"./Action-BwiD4nix.js";import{J as a,h as y,L as B}from"./DateField-S5BDIsJU.js";import{D as o}from"./DateRangePicker-3w6bfRsG.js";import{F as P}from"./FieldDescription-D6SY3-DN.js";import"./index-Cun1SEai.js";import"./dynamic-CBZdW0rY.js";import"./PropsContextProvider-D-E9sUQW.js";import"./mergeRefs-BKTGVx17.js";import"./index-CXI9rWZp.js";import"./clsx-B-dksMZM.js";import"./FieldError-Bawolgzq.js";import"./IconWarning-DXpZ8EkD.js";import"./FieldError-CQn8D9rY.js";import"./utils-BGdTTFGe.js";import"./Text-CUtREENU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CwRDR58d.js";import"./context-BDj_8DgP.js";import"./browser-5dwj1raN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BZeHbbby.js";import"./Hidden-CDt-bii7.js";import"./Text-CrBUObvU.js";import"./EmulatedBoldText-bw_ADscr.js";import"./LoadingSpinner-DNyrAbcW.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BwtVAxMD.js";import"./ProgressBar-OmNCHxSP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEGjP4QC.js";import"./useFocus-CV5tS3zW.js";import"./useFocusRing-DlSXTuap.js";import"./useFocusable-CCkYWWjg.js";import"./ContextMenuSection-Bs_nt5W1.js";import"./Popover-DZXUsAhj.js";import"./DialogTriggerView-CvcPrbY8.js";import"./context-BgdpZ9Nh.js";import"./useStatic-DAiG3iJH.js";import"./RSPContexts-x0Tynp33.js";import"./ClearPropsContextView-mAWKRp53.js";import"./useControlledState-D1OKWRDf.js";import"./FocusScope-CC4fXxOZ.js";import"./useCollator-KwZeuNwe.js";import"./VisuallyHidden-BpSio_rc.js";import"./Collection-CRLgXtsT.js";import"./CollectionBuilder-wU1sry9x.js";import"./context-Bs3ecAZ9.js";import"./Separator-CtW8b_yz.js";import"./SelectionManager-B23tCYpi.js";import"./useEvent-C3cKfFZ7.js";import"./Switch-B4JasYcK.js";import"./useMakeFocusable-Vdb5-otp.js";import"./useToggleState-CGi4neW0.js";import"./useFormReset-i0yRktMd.js";import"./getActionGroupSlot-DYUIykqS.js";import"./Form-B2_iaNmT.js";import"./Group-BpjaHcFI.js";import"./Input-B5CQfP72.js";import"./useFormValidation-C1IjZLpu.js";import"./useSpinButton-BbQmJ8MJ.js";import"./useFilter-C_rLuQ2H.js";import"./FormField.module-CqWyJNQI.js";import"./RangeCalendar-D6x2UrFP.js";import"./Heading-CrizDQZ8.js";import"./useUpdateEffect-DncvnBXT.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Kr={title:"Integrations/React Hook Form/DateRangePicker",component:h,render:()=>{const t=async b=>{await g(1500),_(b)},F=x({defaultValues:{dateRangeDefaultValue:{start:a("2025-09-01"),end:a("2025-12-24")}}}),i=D();return r.jsx(j,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:y(B()),children:r.jsx(e,{children:"Future date range"})})}),r.jsx(R,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},m={},n={render:()=>{const t=x();return r.jsxs(j,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(h,{name:"text",rules:{required:!0},children:r.jsxs(o,{children:[r.jsx(e,{children:"Future Date"}),r.jsx(P,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,c,u;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=m.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(f=(l=n.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};const Nr=["Default","WithFocusAndError"];export{m as Default,n as WithFocusAndError,Nr as __namedExportsOrder,Kr as default};
