import{j as r}from"./iframe-CwjVVvSu.js";import{a as h,u as x,F as j,t as D}from"./Form-CeAg-VEU.js";import{L as e}from"./Label-CmvTTYLZ.js";import{B as s}from"./Button-BzxBG2HJ.js";import{S}from"./Section-CxEg7JTo.js";import{A as R}from"./ActionGroup-CtSc6WUI.js";import{s as g}from"./Action-CQ8EezpL.js";import{J as a,h as y,L as B}from"./DateField-Dq1WGRC0.js";import{D as o}from"./DateRangePicker-CuQAeq2_.js";import{F as P}from"./FieldDescription-C3q2LEa8.js";import"./index-Cun1SEai.js";import"./dynamic-BP9Yj9yh.js";import"./flowComponent-CL0EVs0o.js";import"./index-CVGQdXYt.js";import"./clsx-B-dksMZM.js";import"./index-Bxp7_DVb.js";import"./FieldError-XyqikU8N.js";import"./IconWarning-B6H6J5Pk.js";import"./FieldError-C3URs1EZ.js";import"./utils-OpG5u5ZF.js";import"./Text-lT5rhDYZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BEI6070A.js";import"./context-YbH8ssAd.js";import"./browser-DnOs_TEg.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BELpmtJQ.js";import"./Hidden-BrRDJs-s.js";import"./Text-BOmlTVxc.js";import"./EmulatedBoldText-pbz3Nf-x.js";import"./LoadingSpinner-BwQDbOwS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ClXMkmVB.js";import"./ProgressBar-QC1O3iDd.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CTJZYj-E.js";import"./useFocus-YxLRULIL.js";import"./useFocusRing-DVoBnH5y.js";import"./useFocusable-CooOyqEQ.js";import"./ContextMenuSection-BSZPjhOz.js";import"./Dialog-D6Mx5C8w.js";import"./RSPContexts-C2pkpfxa.js";import"./OverlayArrow-n3jQFhGI.js";import"./useControlledState-3R78iQB5.js";import"./Collection-cKUjot9l.js";import"./CollectionBuilder-DmI3Nmaj.js";import"./context-Boi0W4no.js";import"./Separator-DgCYxSL8.js";import"./SelectionManager-BvVPZ4Sc.js";import"./useEvent-tgNtvJjt.js";import"./useCollator-3AvnbkJz.js";import"./FocusScope-3UfsOkyw.js";import"./VisuallyHidden-DYp4WZRH.js";import"./getActionGroupSlot-D-7WMSXI.js";import"./useStatic-DG0mSv16.js";import"./context-C4fo6dak.js";import"./Form-BBcAxf0K.js";import"./Group-BsewxSmY.js";import"./Input-DebxReei.js";import"./useFormValidation-Z5AW4dUj.js";import"./useFormReset-BtU7PEqW.js";import"./useSpinButton-BBQ6sWW-.js";import"./useFilter-CQhbs6Uq.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-GBjR9IEI.js";import"./useOverlayController-KraOxkmW.js";import"./OverlayContextProvider-EJWOl_vr.js";import"./ClearPropsContextView-CpKm48Q9.js";import"./RangeCalendar-DquqGKAf.js";import"./Heading-oClWNrqM.js";import"./useUpdateEffect-CNJ97Fi6.js";import"./useMakeFocusable-CgSnmY1U.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Nr={title:"Integrations/React Hook Form/DateRangePicker",component:h,render:()=>{const t=async b=>{await g(1500),_(b)},F=x({defaultValues:{dateRangeDefaultValue:{start:a("2025-09-01"),end:a("2025-12-24")}}}),i=D();return r.jsx(j,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:y(B()),children:r.jsx(e,{children:"Future date range"})})}),r.jsx(R,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},m={},n={render:()=>{const t=x();return r.jsxs(j,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(h,{name:"text",rules:{required:!0},children:r.jsxs(o,{children:[r.jsx(e,{children:"Future Date"}),r.jsx(P,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,c,u;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=m.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(l=n.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};const Ur=["Default","WithFocusAndError"];export{m as Default,n as WithFocusAndError,Ur as __namedExportsOrder,Nr as default};
