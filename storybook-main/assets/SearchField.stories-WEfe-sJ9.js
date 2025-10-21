import{j as r}from"./iframe-Cxe2R7_6.js";import{a as c,u as d,F as l,t as b}from"./Form-J2UUhBWk.js";import{L as h}from"./Label-BvEZKMSr.js";import{B as i}from"./Button-DDreAfBq.js";import{S as g}from"./Section-CTCBpNMs.js";import{A as y}from"./ActionGroup-3nPo4GGD.js";import{s as x}from"./Action-g8e46b99.js";import{S as f}from"./SearchField-DRI79S2b.js";import"./index-Cun1SEai.js";import"./dynamic-C5ZbgSqQ.js";import"./flowComponent-atuhteL1.js";import"./index-BmulK9zF.js";import"./clsx-B-dksMZM.js";import"./index-C9WdiMZF.js";import"./FieldError-DJ7xx1bf.js";import"./IconWarning-Jidhe8u4.js";import"./FieldError-C0Ib8VCD.js";import"./utils-DyWdIPZh.js";import"./Text-DwJdwITw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Iif1rEXq.js";import"./context-C4neI5Xk.js";import"./browser-eQsbTmR1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-bC6dqEsb.js";import"./Hidden-D2ApJihV.js";import"./Text-BRz7lILS.js";import"./EmulatedBoldText-C6_bi1Ug.js";import"./LoadingSpinner-e3lyxMd6.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CDVXHq5z.js";import"./ProgressBar-CNBuCKLn.js";import"./useLabel-D72_X68t.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CePQ8dAH.js";import"./useFocus-Cpp7XZsJ.js";import"./useFocusRing-b-PxAWXn.js";import"./useFocusable-D66X7lwl.js";import"./ContextMenuSection-Bi1QxvNY.js";import"./Dialog-Ch6Gf7aG.js";import"./RSPContexts-BTHaIq-S.js";import"./OverlayArrow-BxgQp36F.js";import"./useControlledState-B5CLhXq4.js";import"./Collection-C-iX88s0.js";import"./CollectionBuilder-DY4KGZ6m.js";import"./SelectionIndicator-BZBAluCS.js";import"./Separator-TUkk8FpW.js";import"./SelectionManager-D-Y_L5dA.js";import"./useEvent-C1DB-zaK.js";import"./useCollator-B3EheL1U.js";import"./FocusScope-NPqoHgmt.js";import"./VisuallyHidden-BVfZKHZh.js";import"./getActionGroupSlot-BsGN6_f1.js";import"./useStatic-CcLu1Qpn.js";import"./context-DVixImBB.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-D6nfZf0A.js";import"./Form-xSvri39Q.js";import"./Group-CoOuBhM6.js";import"./Input-D9HmJNQ0.js";import"./useTextField-B345Mwln.js";import"./useFormReset-ClXq3Rv0.js";import"./useFormValidation-Bu_33Brb.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),vr={title:"Integrations/React Hook Form/SearchField",component:c,render:()=>{const t=async j=>{await x(5e3),_(j)},F=d({defaultValues:{user:""}}),S=b();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(S,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Suche"})})}),r.jsx(y,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Role"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var m,s,n;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <SearchField>
            <Label>Role</Label>
          </SearchField>
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
}`,...(u=(a=e.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const Ir=["Default","WithFocusAndError"];export{o as Default,e as WithFocusAndError,Ir as __namedExportsOrder,vr as default};
