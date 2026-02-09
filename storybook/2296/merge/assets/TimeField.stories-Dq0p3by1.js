import{j as r,r as x}from"./iframe-CJJ5mYnn.js";import{a,u as p,F as d,t as j,R as u,S as F}from"./ResetButton-C05rPY-2.js";import{L as t}from"./Label-KzCwLrnq.js";import{B as l}from"./Button-Cm9iNCfL.js";import{S as b}from"./Section-K47s4uAu.js";import{A as E}from"./ActionGroup-m72PHNb8.js";import{s as c}from"./Action-DnpS_czG.js";import{L as S}from"./DateInput-uRGHuP8p.js";import{T as o}from"./TimeField-C_Enfm04.js";import{F as T}from"./FieldError-DFjBSzci.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CBA_L5x6.js";import"./flowComponent-BiwmgULL.js";import"./index-BXYeEKBx.js";import"./clsx-B-dksMZM.js";import"./index-BAQeQlIi.js";import"./useLocalizedStringFormatter-DftyoPOP.js";import"./context-DMBLfBJz.js";import"./useRef-BataXbH4.js";import"./utils-CzEQVu_B.js";import"./ButtonView-BZWbi-p0.js";import"./browser-Dno-4bzG.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Crm05hod.js";import"./Hidden-AXn-SW1d.js";import"./IconWarning-7VhmiBC1.js";import"./remote-__48vje9.js";import"./Text-DETIdekS.js";import"./EmulatedBoldText-Ddbav1xv.js";import"./Text-C_ulbvRg.js";import"./LoadingSpinner-BkLfehTA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DBs8-zE9.js";import"./ProgressBar-DEVhhcDS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-x08fx3rG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BjSa1aTn.js";import"./useFocus-CcXCF9Et.js";import"./useFocusRing-DJCeTTlI.js";import"./useFocusable-BrXzadpt.js";import"./ContextMenuSection-JlR6lzy2.js";import"./Dialog-BJQKxFLq.js";import"./RSPContexts-BTWN0Dkl.js";import"./OverlayArrow-B9C6jKaR.js";import"./useControlledState-Bk661CCw.js";import"./Collection-B0Oi5e2R.js";import"./CollectionBuilder-DM6FVurg.js";import"./SelectionIndicator-t_QTWROb.js";import"./Separator-Ba2IdZvX.js";import"./SelectionManager-h8Xia05C.js";import"./useEvent-B7gpfAjJ.js";import"./useCollator-BLS40MVU.js";import"./FocusScope-Bpw-7kqG.js";import"./VisuallyHidden-CdWE-b-g.js";import"./getActionGroupSlot-BsVn5MxR.js";import"./useStatic-DKMjC4UR.js";import"./context-B6BNwR5M.js";import"./FieldError-C22n8dTl.js";import"./Form-Di0BFhhp.js";import"./Group-Bb48B7zD.js";import"./Input-BDAHDxkc.js";import"./useFormValidation-DDUTP5mG.js";import"./useFormReset-Bwb9lNn2.js";import"./useSpinButton-BeccFYlt.js";import"./useFilter-B1AQOCkK.js";import"./useFieldComponent-DJ8W8blY.js";import"./AlertText-DqO2-SeN.js";import"./AlertIcon-CvbzdPY4.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Cr as __namedExportsOrder,kr as default};
