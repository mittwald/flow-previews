import{j as r}from"./iframe-DE21mSiE.js";import{a as x,u as f,F as j,t as b}from"./Form-CUo_fzaz.js";import{L as t}from"./Label-D6jpl-Ee.js";import{B as i}from"./Button-DdcjdJkJ.js";import{S as y}from"./Section-CoWAiCo1.js";import{A as S}from"./ActionGroup-CNc43KOX.js";import{s as g}from"./Action-CR9ahmpz.js";import{N as o}from"./NumberField-kHA_AK38.js";import{F as A}from"./FieldDescription-DfXOpk0t.js";import"./index-Cun1SEai.js";import"./dynamic-BIsQA2QQ.js";import"./flowComponent-CyATdwQg.js";import"./index-DVBAlOxg.js";import"./clsx-B-dksMZM.js";import"./index-ssZEpx-s.js";import"./FieldError-B59qoisB.js";import"./IconWarning-iWnf9NI2.js";import"./FieldError-Bu_r-4G9.js";import"./utils-DqYJbNsI.js";import"./Text-CutbQTmF.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Bn_AwxOr.js";import"./context-Br9w7yZh.js";import"./browser-BjU0tWvf.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-C-oTvvPr.js";import"./Hidden-C98sYe40.js";import"./Text-DOdVur7X.js";import"./EmulatedBoldText-BOQZ24Hi.js";import"./LoadingSpinner-CObpOXYq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CbR0WrFZ.js";import"./ProgressBar-ByrF5SpY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dv9orCJu.js";import"./useFocus-CRZNnr1R.js";import"./useFocusRing-pH6mNL0D.js";import"./useFocusable-AVRnrAkJ.js";import"./ContextMenuSection-CuNeUF_7.js";import"./Dialog-CqjG3TV5.js";import"./RSPContexts-BtJsn2IM.js";import"./OverlayArrow-D4IsQ9Uw.js";import"./useControlledState-Bml9wY_-.js";import"./Collection-CtBmofMr.js";import"./CollectionBuilder-OPUz1gD2.js";import"./SelectionIndicator-Daa_H3OJ.js";import"./Separator-BLbs5DM2.js";import"./SelectionManager-RcCyJikL.js";import"./useEvent-9zXlgdze.js";import"./useCollator-BKBsR6-a.js";import"./FocusScope-1KdfzaZh.js";import"./VisuallyHidden-pa5WzvsI.js";import"./getActionGroupSlot-CKs13wvK.js";import"./useStatic-Cbl6RHQu.js";import"./context-6jqGW8Yr.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-CGiqkN0v.js";import"./Form-C4-mbjGM.js";import"./Group-Xk6UpG4z.js";import"./Input-C920aKTw.js";import"./useFormValidation-B0vSubJ3.js";import"./useSpinButton-CCrC_d0v.js";import"./useFormReset-BcRO7Ruj.js";import"./useTextField-BNBoF8qF.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:x,render:()=>{const e=async F=>{await g(1500),_(F)},p=f({defaultValues:{ageDefaultValue:36}}),m=b();return r.jsx(j,{form:p,onSubmit:e,children:r.jsxs(y,{children:[r.jsx(m,{name:"age",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(o,{minValue:18,children:[r.jsx(t,{children:"Age"}),r.jsx(A,{children:"You have to be at least 18 years old"})]})}),r.jsxs(S,{children:[r.jsx(i,{onPress:()=>p.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:()=>{const e=f();return r.jsxs(j,{form:e,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",rules:{required:!0},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var a,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var c,d,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const Ir=["Default","WithFocusAndError"];export{s as Default,n as WithFocusAndError,Ir as __namedExportsOrder,wr as default};
