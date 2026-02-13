import{r as x,j as r}from"./iframe-DYxqCFL4.js";import{a as p,u as a,F as d,R as u,S as F,t as j}from"./ResetButton-DZYHoig3.js";import{L as t}from"./Label-DuKZtpj_.js";import{B as l}from"./Button-DGbEpLIN.js";import{S as b}from"./Section-BBD9utnH.js";import{A as E}from"./ActionGroup-BmI-EAdu.js";import{s as c}from"./ActionBatch-BfjBVLTQ.js";import{L as S}from"./DateInput-C2zCX5B5.js";import{T as o}from"./TimeField-DsjHiOke.js";import{F as T}from"./FieldError-sWm_iZNp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C8CcPw_G.js";import"./flowComponent-SnxdO0ip.js";import"./index-CMV8c4GV.js";import"./clsx-B-dksMZM.js";import"./index-DJ6wSCwd.js";import"./useLocalizedStringFormatter-B6u7Awnk.js";import"./context-CfMfa2C9.js";import"./ActionGroupView-DEw0JaMM.js";import"./Content-DzIiqqqA.js";import"./Heading-HOIK8yqY.js";import"./Heading-DbYjHDJK.js";import"./RSPContexts-DXUT3Wo8.js";import"./utils-C1fpOvwY.js";import"./Text-BnII0mKt.js";import"./browser-CmbZy-PD.js";import"./EmulatedBoldText-D6xSemQT.js";import"./Text-B3xsuc84.js";import"./Modal-DUoogNsU.js";import"./Overlay-CnLralOh.js";import"./useOverlayController-BZwKG1Aj.js";import"./useStatic-BMoi980u.js";import"./OverlayContextProvider-tFRc17qj.js";import"./LoadingSpinner-BY4JXLJQ.js";import"./IconWarning-BGRYHRhg.js";import"./remote-WwxW7fyl.js";import"./Dialog-CiGSJFZ7.js";import"./Button-BPYpcxnx.js";import"./ProgressBar-Cu5usRFF.js";import"./Label-DwTYNUmc.js";import"./Hidden-B_geUQU0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-mobDYg92.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DMR80VPZ.js";import"./useFocus-C6GqelOx.js";import"./useFocusRing-Byzp35A7.js";import"./useFocusable-8bvqGkWP.js";import"./OverlayArrow-R2NHUYtB.js";import"./useControlledState-Co5SihOL.js";import"./Collection-CpIPCaxL.js";import"./CollectionBuilder-B3eaJP6J.js";import"./SelectionIndicator-D_wBgdeg.js";import"./Separator-3N5Q9dE4.js";import"./SelectionManager-BMzSjOT-.js";import"./useEvent-CIxnPnFa.js";import"./useCollator-sfCu5teu.js";import"./FocusScope-BC21MQ9n.js";import"./VisuallyHidden-CZrO0U0i.js";import"./ButtonView-CL1jDIH8.js";import"./Flex-BH_NinKX.js";import"./useRef-BD_w6wL8.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BPGq4V6i.js";import"./getActionGroupSlot-ChAJy8AN.js";import"./FieldError-B9AV5Ok7.js";import"./Form-C4EYd143.js";import"./Group-BZLlrAEU.js";import"./Input-DB_F_n6I.js";import"./useFormReset-VwcIZGsw.js";import"./useFormValidation-FkHTzTfc.js";import"./useSpinButton-BiG23maR.js";import"./useFilter-DaT9YGGe.js";import"./useFieldComponent-DjSvrfgm.js";import"./AlertText-D5ZV5CrS.js";import"./AlertIcon-B9fJ359s.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Yr={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async h=>{await c(1500),g(h)},f=a({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=a();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=a();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,zr as __namedExportsOrder,Yr as default};
