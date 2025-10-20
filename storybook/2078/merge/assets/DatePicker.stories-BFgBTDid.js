import{j as r}from"./iframe-DE21mSiE.js";import{a as x,u as h,F as f,t as D}from"./Form-CUo_fzaz.js";import{L as o}from"./Label-D6jpl-Ee.js";import{B as n}from"./Button-DdcjdJkJ.js";import{S}from"./Section-CoWAiCo1.js";import{A as g}from"./ActionGroup-CNc43KOX.js";import{s as j}from"./Action-CR9ahmpz.js";import{J as y,h as B,L as P}from"./DateField-C3stdEz2.js";import{D as e}from"./DatePicker-tquDUVIA.js";import"./index-Cun1SEai.js";import"./dynamic-BIsQA2QQ.js";import"./flowComponent-CyATdwQg.js";import"./index-DVBAlOxg.js";import"./clsx-B-dksMZM.js";import"./index-ssZEpx-s.js";import"./FieldError-B59qoisB.js";import"./IconWarning-iWnf9NI2.js";import"./FieldError-Bu_r-4G9.js";import"./utils-DqYJbNsI.js";import"./Text-CutbQTmF.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Bn_AwxOr.js";import"./context-Br9w7yZh.js";import"./browser-BjU0tWvf.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-C-oTvvPr.js";import"./Hidden-C98sYe40.js";import"./Text-DOdVur7X.js";import"./EmulatedBoldText-BOQZ24Hi.js";import"./LoadingSpinner-CObpOXYq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CbR0WrFZ.js";import"./ProgressBar-ByrF5SpY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dv9orCJu.js";import"./useFocus-CRZNnr1R.js";import"./useFocusRing-pH6mNL0D.js";import"./useFocusable-AVRnrAkJ.js";import"./ContextMenuSection-CuNeUF_7.js";import"./Dialog-CqjG3TV5.js";import"./RSPContexts-BtJsn2IM.js";import"./OverlayArrow-D4IsQ9Uw.js";import"./useControlledState-Bml9wY_-.js";import"./Collection-CtBmofMr.js";import"./CollectionBuilder-OPUz1gD2.js";import"./SelectionIndicator-Daa_H3OJ.js";import"./Separator-BLbs5DM2.js";import"./SelectionManager-RcCyJikL.js";import"./useEvent-9zXlgdze.js";import"./useCollator-BKBsR6-a.js";import"./FocusScope-1KdfzaZh.js";import"./VisuallyHidden-pa5WzvsI.js";import"./getActionGroupSlot-CKs13wvK.js";import"./useStatic-Cbl6RHQu.js";import"./context-6jqGW8Yr.js";import"./Form-C4-mbjGM.js";import"./Group-Xk6UpG4z.js";import"./Input-C920aKTw.js";import"./useFormValidation-B0vSubJ3.js";import"./useFormReset-BcRO7Ruj.js";import"./useSpinButton-CCrC_d0v.js";import"./useFilter-CxujenOp.js";import"./FormField.module-CqWyJNQI.js";import"./Popover-DHByEabR.js";import"./useOverlayController-Fy6NErhC.js";import"./OverlayContextProvider-B008JOFK.js";import"./ClearPropsContextView-DDfoOlOf.js";import"./RangeCalendar-BDV0oO1i.js";import"./Heading-b-A4WO83.js";import"./useUpdateEffect-BMMPPDjo.js";import"./useMakeFocusable-BrvNHTGQ.js";const{action:$}=__STORYBOOK_MODULE_ACTIONS__,_=$("submit"),Jr={title:"Integrations/React Hook Form/DatePicker",component:x,render:()=>{const t=async F=>{await j(1500),_(F)},b=h({defaultValues:{dateDefaultValue:y("2025-09-01")}}),i=D();return r.jsx(f,{form:b,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(i,{name:"date",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(e,{children:r.jsx(o,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(e,{minValue:B(P()),children:r.jsx(o,{children:"Future date"})})}),r.jsx(g,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},m={},s={render:()=>{const t=h();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(x,{name:"text",children:r.jsx(e,{children:r.jsx(o,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var a,p,c;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(c=(p=m.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,d,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
