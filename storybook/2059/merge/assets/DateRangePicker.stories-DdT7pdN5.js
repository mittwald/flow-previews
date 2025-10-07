import{j as r}from"./iframe-LeKLDkYY.js";import{a as h,u as x,F as j,t as D}from"./Form-BYfGufMQ.js";import{L as e}from"./Label-_IGpUYiB.js";import{B as s}from"./Button-BbTRgfHO.js";import{S}from"./Section-BZBM6YrE.js";import{A as R}from"./ActionGroup-oo50HUzg.js";import{s as g}from"./Action-BR3Us8L0.js";import{J as a,h as y,L as B}from"./DateField-DJi51PnP.js";import{D as o}from"./DateRangePicker-CoIyWCmz.js";import{F as P}from"./FieldDescription-7AeFbuXn.js";import"./index-Cun1SEai.js";import"./dynamic-BVwjsZ-m.js";import"./flowComponent-B87WjEVi.js";import"./index-Bs8MTrz8.js";import"./clsx-B-dksMZM.js";import"./index-uQv72qiR.js";import"./FieldError-TZ4s3Na9.js";import"./IconWarning-DddVt0_L.js";import"./FieldError-BDYKP3YZ.js";import"./utils-1n9saaJJ.js";import"./Text--oZ7LG8m.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-_ZYyHG1p.js";import"./context-wUV3k3U5.js";import"./browser-Cy-I7M8E.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-C1dMHZA4.js";import"./Hidden-CLJBhJup.js";import"./Text-tNO3jzOI.js";import"./EmulatedBoldText-CCtxrL0Y.js";import"./LoadingSpinner-DNtKok85.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CwiWPZWS.js";import"./ProgressBar-QdK-gkty.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-kmLZVcf4.js";import"./useFocus-DpQgRw3u.js";import"./useFocusRing-AniuyIk6.js";import"./useFocusable-BqRn9RY3.js";import"./ContextMenuSection-Dax-JE0X.js";import"./Dialog-Dqx_Qz1i.js";import"./RSPContexts-CUA3wiFH.js";import"./OverlayArrow-CWSdcIAn.js";import"./useControlledState-82f8Q_fD.js";import"./Collection-CO40bpB2.js";import"./CollectionBuilder-lBJI-o9S.js";import"./context-BPwzWA_h.js";import"./Separator-BBybTRPh.js";import"./SelectionManager-RiHQO5ol.js";import"./useEvent-CeBaYdiI.js";import"./useCollator-Bk1IX2EM.js";import"./FocusScope-tqJ5v6CU.js";import"./VisuallyHidden-25_VPX5X.js";import"./getActionGroupSlot-5hfWvZu9.js";import"./useStatic-BEy_HvO3.js";import"./context-DpN-jprx.js";import"./Form-CCM4YJxo.js";import"./Group-CWnUrbV4.js";import"./Input-CErx5FmD.js";import"./useFormValidation-B7bn9a_3.js";import"./useFormReset-CXz6fjib.js";import"./useSpinButton-CmzIiJ0X.js";import"./useFilter-Bn3c-FKy.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-Dj6f4c-s.js";import"./useOverlayController-D3GthEwS.js";import"./OverlayContextProvider-CoT99eZx.js";import"./ClearPropsContextView-BstYBP5M.js";import"./RangeCalendar-CsUmRMFZ.js";import"./Heading-jlE5Mrug.js";import"./useUpdateEffect-D3F5aii7.js";import"./useMakeFocusable-a9qPG6ZB.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Nr={title:"Integrations/React Hook Form/DateRangePicker",component:h,render:()=>{const t=async b=>{await g(1500),_(b)},F=x({defaultValues:{dateRangeDefaultValue:{start:a("2025-09-01"),end:a("2025-12-24")}}}),i=D();return r.jsx(j,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"dateRange",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeDefaultValue",children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:r.jsx(o,{children:r.jsx(e,{children:"Date range"})})}),r.jsx(i,{name:"dateRangeMinValue",children:r.jsx(o,{minValue:y(B()),children:r.jsx(e,{children:"Future date range"})})}),r.jsx(R,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},m={},n={render:()=>{const t=x();return r.jsxs(j,{form:t,onSubmit:async()=>await g(2e3),children:[r.jsx(h,{name:"text",rules:{required:!0},children:r.jsxs(o,{children:[r.jsx(e,{children:"Future Date"}),r.jsx(P,{children:"Select a future date"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,c,u;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(c=m.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,l,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
