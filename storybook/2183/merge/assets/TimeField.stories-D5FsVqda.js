import{j as r,r as x}from"./iframe-BoCc-iJU.js";import{u as p,F as a}from"./Form-B53eFlWd.js";import{L as o}from"./Label-DGwnCcrv.js";import{B as l}from"./Button-XooD-Xiy.js";import{S as j}from"./Section-NRJmv6xi.js";import{A as b}from"./ActionGroup-Cq_e26ja.js";import{s as d}from"./Action-CKhPUoRP.js";import{K as E}from"./DateInput-Cc8Jor0F.js";import{T as t}from"./TimeField-CPtGY9u0.js";import{F as S}from"./FieldError-gHUqbDM9.js";import{F as c,t as T}from"./Field-DT4WU7wb.js";import{R as u}from"./ResetButton-1ZvDQoFd.js";import{S as F}from"./SubmitButton-CJxf1GR5.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BzlHG3zD.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aIKmACWg.js";import"./index-U3eHMBln.js";import"./index-CpJJlR3B.js";import"./useLocalizedStringFormatter-CGHFzKy5.js";import"./context-BrFrKL-P.js";import"./Label-E_BXoGJl.js";import"./utils-P0pc5_a9.js";import"./Hidden-7MHP_c1E.js";import"./IconApp-C2RMdkv5.js";import"./remote-DSbtRD5R.js";import"./IconX-CkgsTx4p.js";import"./IconCheck-B8A9P0y2.js";import"./Text-CxsQklp2.js";import"./EmulatedBoldText-CBFTpxXk.js";import"./Text-CwFr0z0b.js";import"./LoadingSpinner-MhY_zuYj.js";import"./ariaLive-DBfYrca8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D6UvikyC.js";import"./ProgressBar-2FpoVhjA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-msUyYt71.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C11Qnu-9.js";import"./useFocus-Cge5HK5z.js";import"./useFocusRing-GN2tGneZ.js";import"./useFocusable-C7xRBGe6.js";import"./ContextMenuSection-DJIIq9GL.js";import"./lib-90ocxLs-.js";import"./Dialog-CZPzdPg7.js";import"./RSPContexts-ZqX2hjEE.js";import"./OverlayArrow-BflVffdz.js";import"./useControlledState-Bp_HlHxi.js";import"./Collection-CTIB5Yac.js";import"./CollectionBuilder-pq_KYGFA.js";import"./SelectionIndicator-DXYS_YB1.js";import"./Separator-MSKztmUd.js";import"./SelectionManager-gKDO3ABG.js";import"./useEvent-2MJ1vmf8.js";import"./useCollator-8xA0jmsd.js";import"./FocusScope-DAKoy3Tt.js";import"./VisuallyHidden-Dalv-eS5.js";import"./dynamic-CBUiQ56u.js";import"./getActionGroupSlot-B7nGnNh4.js";import"./useStatic-BIG45Iee.js";import"./context-xz8cKbOL.js";import"./FieldError-Cv1yZmyj.js";import"./Form-AyX8lm4h.js";import"./Group-DUY-xJc3.js";import"./Input-BVdlr_HZ.js";import"./useFormValidation-DSNLWRBM.js";import"./useFormReset-Bkd1XrYX.js";import"./useSpinButton-ojZHExW6.js";import"./useFilter-Dd4uEdG-.js";import"./useFieldComponent-BP-lIfvD.js";import"./IconDanger-CyJfzsCE.js";import"./useRef-DM9KQBRC.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Nr={title:"Integrations/React Hook Form/TimeField",component:c,render:()=>{const e=async h=>{await d(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new E(16,0)}}),n=T();return r.jsx(a,{form:f,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(n,{name:"time",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Time"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"text",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
