import{j as r,r as F}from"./iframe-BoCc-iJU.js";import{u as n,F as p}from"./Form-B53eFlWd.js";import{B as d}from"./Button-XooD-Xiy.js";import{S}from"./Section-NRJmv6xi.js";import{A as x}from"./ActionGroup-Cq_e26ja.js";import{s as a}from"./Action-CKhPUoRP.js";import{S as s}from"./Switch-CpgK8E6I.js";import{F as E}from"./FieldError-gHUqbDM9.js";import{F as c,t as j}from"./Field-DT4WU7wb.js";import{R as u}from"./ResetButton-1ZvDQoFd.js";import{S as l}from"./SubmitButton-CJxf1GR5.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BzlHG3zD.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aIKmACWg.js";import"./index-U3eHMBln.js";import"./index-CpJJlR3B.js";import"./IconApp-C2RMdkv5.js";import"./remote-DSbtRD5R.js";import"./IconX-CkgsTx4p.js";import"./IconCheck-B8A9P0y2.js";import"./Text-CxsQklp2.js";import"./EmulatedBoldText-CBFTpxXk.js";import"./Text-CwFr0z0b.js";import"./utils-P0pc5_a9.js";import"./LoadingSpinner-MhY_zuYj.js";import"./ariaLive-DBfYrca8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CGHFzKy5.js";import"./context-BrFrKL-P.js";import"./Button-D6UvikyC.js";import"./ProgressBar-2FpoVhjA.js";import"./Label-E_BXoGJl.js";import"./Hidden-7MHP_c1E.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-msUyYt71.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C11Qnu-9.js";import"./useFocus-Cge5HK5z.js";import"./useFocusRing-GN2tGneZ.js";import"./useFocusable-C7xRBGe6.js";import"./ContextMenuSection-DJIIq9GL.js";import"./lib-90ocxLs-.js";import"./Dialog-CZPzdPg7.js";import"./RSPContexts-ZqX2hjEE.js";import"./OverlayArrow-BflVffdz.js";import"./useControlledState-Bp_HlHxi.js";import"./Collection-CTIB5Yac.js";import"./CollectionBuilder-pq_KYGFA.js";import"./SelectionIndicator-DXYS_YB1.js";import"./Separator-MSKztmUd.js";import"./SelectionManager-gKDO3ABG.js";import"./useEvent-2MJ1vmf8.js";import"./useCollator-8xA0jmsd.js";import"./FocusScope-DAKoy3Tt.js";import"./VisuallyHidden-Dalv-eS5.js";import"./dynamic-CBUiQ56u.js";import"./getActionGroupSlot-B7nGnNh4.js";import"./useStatic-BIG45Iee.js";import"./context-xz8cKbOL.js";import"./IconCheck-BjxSwc-y.js";import"./IconClose-C5BWra8K.js";import"./useFieldComponent-BP-lIfvD.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DZ26UPfc.js";import"./useFormReset-Bkd1XrYX.js";import"./FieldError-Cv1yZmyj.js";import"./IconDanger-CyJfzsCE.js";import"./useRef-DM9KQBRC.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Gr={title:"Integrations/React Hook Form/Switch",component:c,render:()=>{const t=async h=>{await a(5e3),B(h)},o=n({defaultValues:{isEnabled:!1}}),f=j();return r.jsx(p,{form:o,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(x,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=n();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await a(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await a(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
