import{j as e,r as g}from"./iframe-Du65Ph_c.js";import{b as a,u as l,F as c,t as j}from"./Form-B3SdpJl2.js";import{L as i}from"./Label-BClS0qAd.js";import{R as p,S as h}from"./ResetButton-16xJCuRV.js";import{B as d}from"./Button-2wmaPnFC.js";import{S as F}from"./Section-CmcN9Eur.js";import{A as b}from"./ActionGroup-CUUirHEC.js";import{s as u}from"./Action-BMmoeCN3.js";import{S as s,a as r}from"./Segment-DGdDImA2.js";import{F as v}from"./FieldError-VBXyMAIR.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CtEU0XPC.js";import"./flowComponent-CYbHZhXg.js";import"./index-XI88kJrR.js";import"./clsx-B-dksMZM.js";import"./index-c0t27COx.js";import"./useLocalizedStringFormatter-Dhvhyrh1.js";import"./context-BMDcuGwa.js";import"./browser-57tL9X_d.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D_GXaE34.js";import"./utils-xIJEb5Gc.js";import"./Hidden-BV9iY75y.js";import"./useRef-DEleeR3P.js";import"./IconWarning-CGSd0Gik.js";import"./remote-D3fYDNUY.js";import"./Text-CtX5enn3.js";import"./EmulatedBoldText-CITvecLd.js";import"./Text-Cl831mKA.js";import"./LoadingSpinner-DEfGApvw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CjwwJrCh.js";import"./ProgressBar-B4qFtVbo.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BdNff0XI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyOin5iy.js";import"./useFocus-mAbeDdRN.js";import"./useFocusRing-B7cLewIC.js";import"./useFocusable-RoNPbAVl.js";import"./ContextMenuSection-Dk6jrzXb.js";import"./Dialog-BO9iihOE.js";import"./RSPContexts-CGKyxyrO.js";import"./OverlayArrow-CbRWYOrW.js";import"./useControlledState-Cdt3oZ6_.js";import"./Collection-C5ltbjdX.js";import"./CollectionBuilder-d6KQwCFJ.js";import"./SelectionIndicator-Cb43LM7W.js";import"./Separator-DKPq8LUH.js";import"./SelectionManager-BR7dbQPM.js";import"./useEvent-D0wfQKUV.js";import"./useCollator-DYYkh59M.js";import"./FocusScope-DUOtKQcD.js";import"./VisuallyHidden-rhukFLga.js";import"./getActionGroupSlot-BXwxo_QL.js";import"./useStatic-B95N-aRU.js";import"./context-Cb5nHwHn.js";import"./useFieldComponent-XbdbUfvB.js";import"./useMakeFocusable-BEkPhqDc.js";import"./RadioGroup-CKUjiS_Q.js";import"./FieldError-cRzcLKxU.js";import"./Form-CLANTGFM.js";import"./useFormValidation-DAWFGl74.js";import"./useFormReset-D830YkJ7.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Pe={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <SegmentedControl>
            <Label>Role</Label>
            <Segment value="admin">Admin</Segment>
            <Segment value="member">Member</Segment>
            <Segment value="accountant">Accountant</Segment>
          </SegmentedControl>
        </Field>
        <SegmentedControl isInvalid>
          <Label>Role</Label>
          <Segment value="admin">Admin</Segment>
          <Segment value="member">Member</Segment>
          <Segment value="accountant">Accountant</Segment>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SegmentedControl>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SegmentedControl>
            <Label>Role</Label>
            <Segment value="admin">Admin</Segment>
            <Segment value="member">Member</Segment>
            <Segment value="accountant">Accountant</Segment>
          </SegmentedControl>
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
}`,...m.parameters?.docs?.source}}};const We=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,We as __namedExportsOrder,Pe as default};
