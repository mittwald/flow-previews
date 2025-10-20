import{j as r}from"./iframe-DE21mSiE.js";import{a as h,u as x,F as f,t as S}from"./Form-CUo_fzaz.js";import{L as i}from"./Label-D6jpl-Ee.js";import{B as m}from"./Button-DdcjdJkJ.js";import{S as T}from"./Section-CoWAiCo1.js";import{A as g}from"./ActionGroup-CNc43KOX.js";import{s as j}from"./Action-CR9ahmpz.js";import{M as y}from"./DateField-C3stdEz2.js";import{T as s}from"./TimeField-Duhuggc0.js";import"./index-Cun1SEai.js";import"./dynamic-BIsQA2QQ.js";import"./flowComponent-CyATdwQg.js";import"./index-DVBAlOxg.js";import"./clsx-B-dksMZM.js";import"./index-ssZEpx-s.js";import"./FieldError-B59qoisB.js";import"./IconWarning-iWnf9NI2.js";import"./FieldError-Bu_r-4G9.js";import"./utils-DqYJbNsI.js";import"./Text-CutbQTmF.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Bn_AwxOr.js";import"./context-Br9w7yZh.js";import"./browser-BjU0tWvf.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-C-oTvvPr.js";import"./Hidden-C98sYe40.js";import"./Text-DOdVur7X.js";import"./EmulatedBoldText-BOQZ24Hi.js";import"./LoadingSpinner-CObpOXYq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CbR0WrFZ.js";import"./ProgressBar-ByrF5SpY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dv9orCJu.js";import"./useFocus-CRZNnr1R.js";import"./useFocusRing-pH6mNL0D.js";import"./useFocusable-AVRnrAkJ.js";import"./ContextMenuSection-CuNeUF_7.js";import"./Dialog-CqjG3TV5.js";import"./RSPContexts-BtJsn2IM.js";import"./OverlayArrow-D4IsQ9Uw.js";import"./useControlledState-Bml9wY_-.js";import"./Collection-CtBmofMr.js";import"./CollectionBuilder-OPUz1gD2.js";import"./SelectionIndicator-Daa_H3OJ.js";import"./Separator-BLbs5DM2.js";import"./SelectionManager-RcCyJikL.js";import"./useEvent-9zXlgdze.js";import"./useCollator-BKBsR6-a.js";import"./FocusScope-1KdfzaZh.js";import"./VisuallyHidden-pa5WzvsI.js";import"./getActionGroupSlot-CKs13wvK.js";import"./useStatic-Cbl6RHQu.js";import"./context-6jqGW8Yr.js";import"./Form-C4-mbjGM.js";import"./Group-Xk6UpG4z.js";import"./Input-C920aKTw.js";import"./useFormValidation-B0vSubJ3.js";import"./useFormReset-BcRO7Ruj.js";import"./useSpinButton-CCrC_d0v.js";import"./useFilter-CxujenOp.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-BrvNHTGQ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),$r={title:"Integrations/React Hook Form/TimeField",component:h,render:()=>{const t=async b=>{await j(1500),_(b)},F=x({defaultValues:{timeDefaultValue:new y(16,0)}}),n=S();return r.jsx(f,{form:F,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(n,{name:"time",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(g,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=x();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(h,{name:"text",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var p,a,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var u,d,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
