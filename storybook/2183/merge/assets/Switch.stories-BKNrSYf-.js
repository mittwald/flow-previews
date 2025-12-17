import{j as r,r as F}from"./iframe-8dFSbqJz.js";import{u as n,F as p}from"./Form-e1P8auwJ.js";import{F as a,t as S}from"./Field-DuFgJCZC.js";import{B as d}from"./Button-Bp8IuIoY.js";import{S as x}from"./Section-Df_pVdm4.js";import{A as E}from"./ActionGroup-DXNvDjwv.js";import{s as c}from"./Action-1KJHzV_0.js";import{S as s}from"./Switch-D4-VNHn_.js";import{F as j}from"./FieldError-olPwxTHW.js";import{R as u}from"./ResetButton-DTl5ui00.js";import{S as l}from"./SubmitButton-Do5y9huz.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-TJej2Zh2.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-DrPvW6ki.js";import"./flowComponent-K_HgwY7e.js";import"./index-DdTsJ3wf.js";import"./clsx-B-dksMZM.js";import"./index-QKd42-im.js";import"./useLocalizedStringFormatter-YU3aOu6y.js";import"./context-81xqWZ8H.js";import"./IconChevronDown-BoB9X9Lx.js";import"./remote-D1_oWH-e.js";import"./IconX-Dl75Mnu2.js";import"./IconCheck-ClCsyRZ4.js";import"./Text-Bc5PmX1I.js";import"./EmulatedBoldText-C5iTwKQF.js";import"./Text-BVGarVrb.js";import"./utils-CatxVoKl.js";import"./LoadingSpinner-qRqEZFCl.js";import"./ariaLive-DqXsnKMw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BKsEcO3C.js";import"./ProgressBar-D99M34jy.js";import"./Label-BbJ0t0io.js";import"./Hidden-YN9d6EVo.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CKOrsKHI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BOmL6f1-.js";import"./useFocus-BOo9d3Bd.js";import"./useFocusRing-D1LOVY8w.js";import"./useFocusable-Bm2s2zNQ.js";import"./ContextMenuSection-qTgSQ3ow.js";import"./lib-90ocxLs-.js";import"./Dialog-BFHdNGes.js";import"./RSPContexts-CBm4dMuh.js";import"./OverlayArrow-CuoDJSSc.js";import"./useControlledState-DYZXiDwW.js";import"./Collection-qqIe35E-.js";import"./CollectionBuilder-CM8I1Is1.js";import"./SelectionIndicator-BcqL5ZP5.js";import"./Separator-zU8KIdJB.js";import"./SelectionManager-Cew3fhRb.js";import"./useEvent-gpwnJALn.js";import"./useCollator-B3xP_FE7.js";import"./FocusScope-KuXCUz--.js";import"./VisuallyHidden-PBFdwu-V.js";import"./getActionGroupSlot-5XNUJgam.js";import"./useStatic-BgApplVo.js";import"./context-Hd2oMXi6.js";import"./IconCheck-CHhzKybW.js";import"./IconClose-DvMPcB33.js";import"./useFieldComponent-Ch2X8LGy.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B01Sawhi.js";import"./useFormReset-D0pwxFN1.js";import"./FieldError-CAnV5-By.js";import"./IconDanger-D2WM-UH7.js";import"./useRef-DBg2cYSp.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:a,render:()=>{const t=async h=>{await c(5e3),B(h)},o=n({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(p,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=n();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
