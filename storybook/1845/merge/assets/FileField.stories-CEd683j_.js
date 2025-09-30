import{j as r}from"./iframe-B7R3Cp0m.js";import{a as c,u as l,F as d,t as b}from"./Form-Ca-ydWJ8.js";import{L as h}from"./Label-BwiLuc4D.js";import{B as t}from"./Button-BfLhmrhP.js";import{S as y}from"./Section-CXYImEJk.js";import{A as B}from"./ActionGroup-DwKGVJQl.js";import{s as x}from"./Action-Duus-uy7.js";import{F as f}from"./FileField-C8-gE-Wk.js";import"./index-Cun1SEai.js";import"./dynamic-DQGoa_Us.js";import"./flowComponent-W1sLmgeU.js";import"./index-DeoRyUxP.js";import"./clsx-B-dksMZM.js";import"./index-DEEeTq16.js";import"./FieldError-C50u32vO.js";import"./IconWarning-CiDVbDUI.js";import"./FieldError-DSYDYeL4.js";import"./utils-Cx-QUl4i.js";import"./Text-Cq8XMVEi.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BoxQ9ugt.js";import"./context-DZWDYeWp.js";import"./browser-D9qXvoab.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CciGw-jp.js";import"./Hidden-Cw4vRCn8.js";import"./Text-mmmtihIj.js";import"./EmulatedBoldText-Bu0mLg2V.js";import"./LoadingSpinner-CBvMx9JI.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DTyr71oU.js";import"./ProgressBar-BUsdfXWy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CZzcdL0j.js";import"./useFocus-BfnX2cH5.js";import"./useFocusRing-KQNrYpLi.js";import"./useFocusable-gE9kDuNJ.js";import"./ContextMenuSection-Qzqr7kFk.js";import"./Dialog-qQprQaf0.js";import"./RSPContexts-nV9TqCtk.js";import"./OverlayArrow-BoyqVqhR.js";import"./useControlledState-DvHwfOTB.js";import"./Collection-DVhSH9ed.js";import"./CollectionBuilder-CIEMJSOs.js";import"./context-DaR2uroz.js";import"./Separator-BVTEwXXm.js";import"./SelectionManager-D3KJzfXx.js";import"./useEvent-2yiTmDJR.js";import"./useCollator-DXIp2FB0.js";import"./FocusScope-DeadHndu.js";import"./VisuallyHidden-7GIVT4u3.js";import"./getActionGroupSlot-kiQExVjr.js";import"./useStatic-B9aD_BAc.js";import"./context-s2Psh2SW.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-Dv3hg-yA.js";import"./Input-B7hM4ezT.js";import"./useMakeFocusable-Co-fjfKM.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,_=g("submit"),Lr={title:"Integrations/React Hook Form/FileField",component:c,render:()=>{const o=async S=>{await x(5e3),_(S)},F=l({defaultValues:{user:""}}),j=b();return r.jsx(d,{form:F,onSubmit:o,children:r.jsxs(y,{children:[r.jsx(j,{name:"user",children:r.jsxs(f,{children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx(B,{children:r.jsx(t,{type:"submit",children:"Submit"})})]})})}},e={},i={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsxs(f,{multiple:!0,children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(t,{type:"submit",children:"Submit"})]})}};var m,n,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
