import{j as r}from"./iframe-DwZ8STeX.js";import{a as x,u as h,F as f,t as D}from"./Form-DB-9BDR2.js";import{L as o}from"./Label-wZ6tq0z6.js";import{B as n}from"./Button-DviFkjeq.js";import{S}from"./Section-ClBJebLo.js";import{A as g}from"./ActionGroup-CghJCTXs.js";import{s as j}from"./Action-bmScN_4O.js";import{J as y,h as B,L as P}from"./DateField-Di3FQiGa.js";import{D as e}from"./DatePicker-BdafvSbF.js";import"./index-Cun1SEai.js";import"./dynamic-DhSxKtV5.js";import"./flowComponent-B5_7XuIt.js";import"./index-ULfo01cY.js";import"./clsx-B-dksMZM.js";import"./index-DRXVqLbm.js";import"./FieldError-DOIfsPUC.js";import"./IconWarning-dtP1FcGg.js";import"./FieldError-CX3z6nx3.js";import"./utils-7Pnsuj4A.js";import"./Text-BcrniBgV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-B7gF29kp.js";import"./context-B00wSq60.js";import"./browser-DDdNHtRK.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DpGi0C14.js";import"./Hidden-CV41pM0d.js";import"./Text-O3JAN1OQ.js";import"./EmulatedBoldText-Cn2ModP-.js";import"./LoadingSpinner-C4ZuAlrP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CkDO_RvR.js";import"./ProgressBar-CsC-_1Kt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-JMMpWwD2.js";import"./useFocus-BONLbswZ.js";import"./useFocusRing-Bg4FiEXG.js";import"./useFocusable-p3-NtQMC.js";import"./ContextMenuSection-ZF-vqHWD.js";import"./Dialog-2PCEZ6kq.js";import"./RSPContexts-CnTUB1D3.js";import"./OverlayArrow-BzoITITy.js";import"./useControlledState-Blay967p.js";import"./Collection-C8ZYuLoW.js";import"./CollectionBuilder-CkIB4w9D.js";import"./context-DapI3jdg.js";import"./Separator-D_cW8HVn.js";import"./SelectionManager-CYnwAR0E.js";import"./useEvent-wDKyQN9g.js";import"./useCollator-Cp0ZA5x6.js";import"./FocusScope-CIj22QkH.js";import"./VisuallyHidden-VLSV2bjz.js";import"./getActionGroupSlot-CSCOifJo.js";import"./useStatic-BQF2lsen.js";import"./context-DCjwncLb.js";import"./Form-ekHeB2q6.js";import"./Group-DYrYUI7b.js";import"./Input-DPWebHIT.js";import"./useFormValidation-DWWt7inC.js";import"./useFormReset-DQpyIayp.js";import"./useSpinButton-CL-MA8ZX.js";import"./useFilter-DLBnNq4q.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-CfCMVMRC.js";import"./useOverlayController-D87w5C3N.js";import"./OverlayContextProvider-BQAK-WIK.js";import"./ClearPropsContextView-DSZLTZ0u.js";import"./RangeCalendar-DgdOijMi.js";import"./Heading-DjEClEsb.js";import"./useUpdateEffect-C_-Qg_Ry.js";import"./useMakeFocusable-BLJfe8lC.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Jr={title:"Integrations/React Hook Form/DatePicker",component:x,render:()=>{const t=async F=>{await j(1500),_(F)},b=h({defaultValues:{dateDefaultValue:y("2025-09-01")}}),i=D();return r.jsx(f,{form:b,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"date",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(e,{minValue:B(P()),children:r.jsx(o,{children:"Future date"})})}),r.jsx(g,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},s={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(e,{children:r.jsx(o,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,c;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(c=(p=m.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,d,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const Kr=["Default","WithFocusAndError"];export{m as Default,s as WithFocusAndError,Kr as __namedExportsOrder,Jr as default};
