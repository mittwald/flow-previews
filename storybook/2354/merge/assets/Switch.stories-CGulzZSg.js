import{r as F,j as r}from"./iframe-BLMVSPV3.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-C6SwIYKJ.js";import{B as d}from"./Button-RfhP7QLX.js";import{S as x}from"./Section-Sirm0ClO.js";import{A as E}from"./ActionGroup-BE2BWOAA.js";import{s as c}from"./ActionBatch-Cx_n21HW.js";import{S as s}from"./Switch-DD_qh4XP.js";import{F as j}from"./FieldError-C9r0kVik.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DAjDUp_G.js";import"./flowComponent-B0rn9FTV.js";import"./index-YglXY0sG.js";import"./clsx-B-dksMZM.js";import"./index-B-iUx4vd.js";import"./useLocalizedStringFormatter-CLP_FKMn.js";import"./context-BPm1HUwp.js";import"./ActionGroupView-Ck11gez5.js";import"./Content-DUxgSWC5.js";import"./Heading-BFhkb_kv.js";import"./Heading-DGpyEp1Z.js";import"./RSPContexts-BTwsU_Cp.js";import"./utils-je6Mfjnf.js";import"./Text-CGLO_VNW.js";import"./browser-CtcijgRV.js";import"./EmulatedBoldText-DNZQf_gm.js";import"./Text-DPHxU6u7.js";import"./Modal-Bevsmrtz.js";import"./useOverlayController-DYQ-WflD.js";import"./useStatic-BWoTOt9k.js";import"./Overlay-CEllIMRS.js";import"./OverlayContextProvider-D_krly58.js";import"./LoadingSpinner-BCnxKzgI.js";import"./IconWarning-DFK0SIT3.js";import"./remote-B_iWR4WH.js";import"./Dialog-BT74UQ_T.js";import"./Button-4lGsfIj0.js";import"./ProgressBar-qhTm7W5b.js";import"./Label-BuUunTyu.js";import"./Hidden-BcBJmzcB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DcRiwsCk.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DgsdN2D5.js";import"./useFocus-B92CKOsl.js";import"./useFocusRing-IVoDVSxb.js";import"./useFocusable-DsXmOaAq.js";import"./OverlayArrow-DqBJvRH_.js";import"./useControlledState-Bp8O9Zqw.js";import"./Collection-D_0q5y9E.js";import"./CollectionBuilder-DVFPK5dr.js";import"./SelectionIndicator-MBj-w85S.js";import"./Separator-CN6eRPM4.js";import"./SelectionManager-Dh2FxkL1.js";import"./useEvent-UzzlN-16.js";import"./useCollator-DnWD9muh.js";import"./FocusScope-uhT9mVfL.js";import"./VisuallyHidden-DQ4qIwkH.js";import"./ButtonView-BFvaDy1U.js";import"./Flex-DMIA7a_N.js";import"./useRef-Bngm3SGC.js";import"./ContextMenuSection-BvWYHMvE.js";import"./getActionGroupSlot-BdFM70uG.js";import"./useFieldComponent-y-VnQdYS.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-7CUyy1jr.js";import"./useFormReset-7ZGeCzym.js";import"./FieldError-CUXp9-J-.js";import"./AlertText-Btk8Ksd_.js";import"./AlertIcon-BrGMsY0L.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};
