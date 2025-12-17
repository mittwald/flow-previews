import{j as r,r as x}from"./iframe-8dFSbqJz.js";import{u as p,F as a}from"./Form-e1P8auwJ.js";import{L as o}from"./Label-B3-xaZya.js";import{F as d,t as j}from"./Field-DuFgJCZC.js";import{B as l}from"./Button-Bp8IuIoY.js";import{S as b}from"./Section-Df_pVdm4.js";import{A as E}from"./ActionGroup-DXNvDjwv.js";import{s as c}from"./Action-1KJHzV_0.js";import{K as S}from"./DateInput-BmlXAUoS.js";import{T as t}from"./TimeField-DxbsOFKd.js";import{F as T}from"./FieldError-olPwxTHW.js";import{R as u}from"./ResetButton-DTl5ui00.js";import{S as F}from"./SubmitButton-Do5y9huz.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-TJej2Zh2.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-K_HgwY7e.js";import"./index-DdTsJ3wf.js";import"./index-QKd42-im.js";import"./useLocalizedStringFormatter-YU3aOu6y.js";import"./context-81xqWZ8H.js";import"./Label-BbJ0t0io.js";import"./utils-CatxVoKl.js";import"./Hidden-YN9d6EVo.js";import"./dynamic-DrPvW6ki.js";import"./IconChevronDown-BoB9X9Lx.js";import"./remote-D1_oWH-e.js";import"./IconX-Dl75Mnu2.js";import"./IconCheck-ClCsyRZ4.js";import"./Text-Bc5PmX1I.js";import"./EmulatedBoldText-C5iTwKQF.js";import"./Text-BVGarVrb.js";import"./LoadingSpinner-qRqEZFCl.js";import"./ariaLive-DqXsnKMw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BKsEcO3C.js";import"./ProgressBar-D99M34jy.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CKOrsKHI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BOmL6f1-.js";import"./useFocus-BOo9d3Bd.js";import"./useFocusRing-D1LOVY8w.js";import"./useFocusable-Bm2s2zNQ.js";import"./ContextMenuSection-qTgSQ3ow.js";import"./lib-90ocxLs-.js";import"./Dialog-BFHdNGes.js";import"./RSPContexts-CBm4dMuh.js";import"./OverlayArrow-CuoDJSSc.js";import"./useControlledState-DYZXiDwW.js";import"./Collection-qqIe35E-.js";import"./CollectionBuilder-CM8I1Is1.js";import"./SelectionIndicator-BcqL5ZP5.js";import"./Separator-zU8KIdJB.js";import"./SelectionManager-Cew3fhRb.js";import"./useEvent-gpwnJALn.js";import"./useCollator-B3xP_FE7.js";import"./FocusScope-KuXCUz--.js";import"./VisuallyHidden-PBFdwu-V.js";import"./getActionGroupSlot-5XNUJgam.js";import"./useStatic-BgApplVo.js";import"./context-Hd2oMXi6.js";import"./FieldError-CAnV5-By.js";import"./Form-DGUlclkV.js";import"./Group-B7CCMhC-.js";import"./Input-C3vnVfPY.js";import"./useFormValidation-BLhEH38g.js";import"./useFormReset-D0pwxFN1.js";import"./useSpinButton-hry20Pxa.js";import"./useFilter-NyLjzUXs.js";import"./useFieldComponent-Ch2X8LGy.js";import"./IconDanger-D2WM-UH7.js";import"./useRef-DBg2cYSp.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Nr={title:"Integrations/React Hook Form/TimeField",component:d,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(a,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"text",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Ur as __namedExportsOrder,Nr as default};
