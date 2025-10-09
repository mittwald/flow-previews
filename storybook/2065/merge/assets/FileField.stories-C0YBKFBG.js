import{j as r}from"./iframe-DwZ8STeX.js";import{a as c,u as l,F as d,t as b}from"./Form-DB-9BDR2.js";import{L as h}from"./Label-wZ6tq0z6.js";import{B as t}from"./Button-DviFkjeq.js";import{S as y}from"./Section-ClBJebLo.js";import{A as B}from"./ActionGroup-CghJCTXs.js";import{s as x}from"./Action-bmScN_4O.js";import{F as f}from"./FileField-CtcfqzV9.js";import"./index-Cun1SEai.js";import"./dynamic-DhSxKtV5.js";import"./flowComponent-B5_7XuIt.js";import"./index-ULfo01cY.js";import"./clsx-B-dksMZM.js";import"./index-DRXVqLbm.js";import"./FieldError-DOIfsPUC.js";import"./IconWarning-dtP1FcGg.js";import"./FieldError-CX3z6nx3.js";import"./utils-7Pnsuj4A.js";import"./Text-BcrniBgV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-B7gF29kp.js";import"./context-B00wSq60.js";import"./browser-DDdNHtRK.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DpGi0C14.js";import"./Hidden-CV41pM0d.js";import"./Text-O3JAN1OQ.js";import"./EmulatedBoldText-Cn2ModP-.js";import"./LoadingSpinner-C4ZuAlrP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CkDO_RvR.js";import"./ProgressBar-CsC-_1Kt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-JMMpWwD2.js";import"./useFocus-BONLbswZ.js";import"./useFocusRing-Bg4FiEXG.js";import"./useFocusable-p3-NtQMC.js";import"./ContextMenuSection-ZF-vqHWD.js";import"./Dialog-2PCEZ6kq.js";import"./RSPContexts-CnTUB1D3.js";import"./OverlayArrow-BzoITITy.js";import"./useControlledState-Blay967p.js";import"./Collection-C8ZYuLoW.js";import"./CollectionBuilder-CkIB4w9D.js";import"./context-DapI3jdg.js";import"./Separator-D_cW8HVn.js";import"./SelectionManager-CYnwAR0E.js";import"./useEvent-wDKyQN9g.js";import"./useCollator-Cp0ZA5x6.js";import"./FocusScope-CIj22QkH.js";import"./VisuallyHidden-VLSV2bjz.js";import"./getActionGroupSlot-CSCOifJo.js";import"./useStatic-BQF2lsen.js";import"./context-DCjwncLb.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-DWWt7inC.js";import"./Input-DPWebHIT.js";import"./useMakeFocusable-BLJfe8lC.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,_=g("submit"),Lr={title:"Integrations/React Hook Form/FileField",component:c,render:()=>{const o=async S=>{await x(5e3),_(S)},F=l({defaultValues:{user:""}}),j=b();return r.jsx(d,{form:F,onSubmit:o,children:r.jsxs(y,{children:[r.jsx(j,{name:"user",children:r.jsxs(f,{children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx(B,{children:r.jsx(t,{type:"submit",children:"Submit"})})]})})}},e={},i={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsxs(f,{multiple:!0,children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(t,{type:"submit",children:"Submit"})]})}};var m,n,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...(u=(a=i.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const qr=["Default","WithFocusAndError"];export{e as Default,i as WithFocusAndError,qr as __namedExportsOrder,Lr as default};
