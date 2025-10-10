import{j as r}from"./iframe-BsWE3_7o.js";import{a as c,u as d,F as l,t as b}from"./Form-CmXyG-QV.js";import{L as x}from"./Label-D6AcunKl.js";import{B as i}from"./Button-B8k4PzHL.js";import{S as g}from"./Section-BBfFuT6N.js";import{A as y}from"./ActionGroup-B8fCt23K.js";import{s as h}from"./Action-BuGRjvOM.js";import{S as f}from"./Slider-BcZ4XC6V.js";import"./index-Cun1SEai.js";import"./dynamic-CuzBn_WV.js";import"./flowComponent-Cm7zYSgo.js";import"./index-Bx4whYyJ.js";import"./clsx-B-dksMZM.js";import"./index-Dl-28hpS.js";import"./FieldError-Dyno9e6-.js";import"./IconWarning-DP87PzzZ.js";import"./FieldError-B9NI0uR6.js";import"./utils-CDS5H-7_.js";import"./Text-TQ7kewRG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Cam9elWn.js";import"./context-JgUU7ob0.js";import"./browser-LwAPTQ-2.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CRuRdSc0.js";import"./Hidden-BJN4u45n.js";import"./Text-BX8imB2t.js";import"./EmulatedBoldText-BTQlJ2rY.js";import"./LoadingSpinner-BHbUYlFD.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dk5kDV0G.js";import"./ProgressBar-B-b_Vg6x.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BAk4CpA9.js";import"./useFocus-D0VElTMN.js";import"./useFocusRing-VBFwaSrL.js";import"./useFocusable-CddXNiQZ.js";import"./ContextMenuSection-B-erxgIm.js";import"./Dialog-BSaAMEbK.js";import"./RSPContexts-BZ8FUmDB.js";import"./OverlayArrow-IIw_dauQ.js";import"./useControlledState-ejVvWz-k.js";import"./Collection-DojlZZtj.js";import"./CollectionBuilder-B76ZLXz4.js";import"./context-lpkCHAFg.js";import"./Separator-Dpoi8-ef.js";import"./SelectionManager-01TNEB4e.js";import"./useEvent-iSMBndhq.js";import"./useCollator-Dfjx7kh0.js";import"./FocusScope-BU2EHzP0.js";import"./VisuallyHidden-CnzfSQ3j.js";import"./getActionGroupSlot-C6PA21cd.js";import"./useStatic-BvSdYqAU.js";import"./context-CUTz3ChQ.js";import"./useMakeFocusable-r7PJwVhH.js";import"./useFormReset-DgPn8KEa.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,O=B("submit"),Ar={title:"Integrations/React Hook Form/Slider",component:c,render:()=>{const t=async j=>{await h(1500),O(j)},S=d({defaultValues:{storage:50}}),F=b();return r.jsx(l,{form:S,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(F,{name:"storage",children:r.jsx(f,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(x,{children:"Storage"})})}),r.jsx(y,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await h(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(x,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var m,s,n;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <Slider>
            <Label>Text</Label>
          </Slider>
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
}`,...(u=(a=e.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const Lr=["Default","WithFocusAndError"];export{o as Default,e as WithFocusAndError,Lr as __namedExportsOrder,Ar as default};
