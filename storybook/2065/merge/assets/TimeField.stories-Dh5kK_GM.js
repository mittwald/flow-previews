import{j as r}from"./iframe-DwZ8STeX.js";import{a as h,u as x,F as f,t as S}from"./Form-DB-9BDR2.js";import{L as i}from"./Label-wZ6tq0z6.js";import{B as m}from"./Button-DviFkjeq.js";import{S as T}from"./Section-ClBJebLo.js";import{A as g}from"./ActionGroup-CghJCTXs.js";import{s as j}from"./Action-bmScN_4O.js";import{M as y}from"./DateField-Di3FQiGa.js";import{T as s}from"./TimeField-BFP9YS2-.js";import"./index-Cun1SEai.js";import"./dynamic-DhSxKtV5.js";import"./flowComponent-B5_7XuIt.js";import"./index-ULfo01cY.js";import"./clsx-B-dksMZM.js";import"./index-DRXVqLbm.js";import"./FieldError-DOIfsPUC.js";import"./IconWarning-dtP1FcGg.js";import"./FieldError-CX3z6nx3.js";import"./utils-7Pnsuj4A.js";import"./Text-BcrniBgV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-B7gF29kp.js";import"./context-B00wSq60.js";import"./browser-DDdNHtRK.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DpGi0C14.js";import"./Hidden-CV41pM0d.js";import"./Text-O3JAN1OQ.js";import"./EmulatedBoldText-Cn2ModP-.js";import"./LoadingSpinner-C4ZuAlrP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CkDO_RvR.js";import"./ProgressBar-CsC-_1Kt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-JMMpWwD2.js";import"./useFocus-BONLbswZ.js";import"./useFocusRing-Bg4FiEXG.js";import"./useFocusable-p3-NtQMC.js";import"./ContextMenuSection-ZF-vqHWD.js";import"./Dialog-2PCEZ6kq.js";import"./RSPContexts-CnTUB1D3.js";import"./OverlayArrow-BzoITITy.js";import"./useControlledState-Blay967p.js";import"./Collection-C8ZYuLoW.js";import"./CollectionBuilder-CkIB4w9D.js";import"./context-DapI3jdg.js";import"./Separator-D_cW8HVn.js";import"./SelectionManager-CYnwAR0E.js";import"./useEvent-wDKyQN9g.js";import"./useCollator-Cp0ZA5x6.js";import"./FocusScope-CIj22QkH.js";import"./VisuallyHidden-VLSV2bjz.js";import"./getActionGroupSlot-CSCOifJo.js";import"./useStatic-BQF2lsen.js";import"./context-DCjwncLb.js";import"./Form-ekHeB2q6.js";import"./Group-DYrYUI7b.js";import"./Input-DPWebHIT.js";import"./useFormValidation-DWWt7inC.js";import"./useFormReset-DQpyIayp.js";import"./useSpinButton-CL-MA8ZX.js";import"./useFilter-DLBnNq4q.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-BLJfe8lC.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),$r={title:"Integrations/React Hook Form/TimeField",component:h,render:()=>{const t=async b=>{await j(1500),_(b)},F=x({defaultValues:{timeDefaultValue:new y(16,0)}}),n=S();return r.jsx(f,{form:F,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(n,{name:"time",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(g,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=x();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(h,{name:"text",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var p,a,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var u,d,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
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
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const vr=["Default","WithFocusAndError"];export{o as Default,e as WithFocusAndError,vr as __namedExportsOrder,$r as default};
