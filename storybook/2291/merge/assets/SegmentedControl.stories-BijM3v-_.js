import{j as e,r as g}from"./iframe-BL1IY_6V.js";import{a,u as l,F as c,t as j,R as p,S as h}from"./ResetButton-BRxvWv3x.js";import{L as i}from"./Label-8Io_X3px.js";import{B as d}from"./Button-B7zQBVb0.js";import{S as F}from"./Section-B_fcZRhb.js";import{A as b}from"./ActionGroup-CBsQTCAe.js";import{s as u}from"./Action-BftMxRJh.js";import{S as s,a as r}from"./Segment-PhkHtUjZ.js";import{F as v}from"./FieldError-D0yWaYHs.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dn3YQ50F.js";import"./flowComponent-C0J7Ul52.js";import"./index-DIrmHlIA.js";import"./clsx-B-dksMZM.js";import"./index-Cr6jOlTO.js";import"./useLocalizedStringFormatter-QSIAvPJu.js";import"./context-BeO7KH58.js";import"./useRef-wA2SAyNt.js";import"./utils-GyL2rjZN.js";import"./ButtonView-DNg_Qy4d.js";import"./browser-DogRo3Wh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-StE6sPfa.js";import"./Hidden-B9Rk5_3H.js";import"./IconWarning-BTI7YBWG.js";import"./remote-BuZW91cH.js";import"./Text-BSlhLkmN.js";import"./EmulatedBoldText-UtdvjbkN.js";import"./Text-B4yGITBG.js";import"./LoadingSpinner-BFVS5fU_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CHtMceZn.js";import"./ProgressBar-DK1MtX49.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyH2amP0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CxRwZ9-L.js";import"./useFocus-D7_v9YO6.js";import"./useFocusRing-DEMWgzWY.js";import"./useFocusable-CUtc6O_Q.js";import"./ContextMenuSection-JBlJYK6m.js";import"./Dialog-CDLoJFKu.js";import"./RSPContexts-BsiO56QH.js";import"./OverlayArrow-CpLmLaON.js";import"./useControlledState-CA6yhcg7.js";import"./Collection-DjA8G57O.js";import"./CollectionBuilder-DOfwpjF8.js";import"./SelectionIndicator-Dec13xxT.js";import"./Separator-mUQkGyBt.js";import"./SelectionManager-C3JHuUY2.js";import"./useEvent-BBSiUFe7.js";import"./useCollator-DpBUbIyY.js";import"./FocusScope-B7aMt2fO.js";import"./VisuallyHidden-CgqIxBlU.js";import"./getActionGroupSlot-Di2KrfRc.js";import"./useStatic-BujRUGzM.js";import"./context-Cv8xNoZb.js";import"./useFieldComponent-oZ5IqIdY.js";import"./useMakeFocusable-Dv_qirCt.js";import"./RadioGroup-BeDUCU2r.js";import"./FieldError-CCCCRqJ9.js";import"./Form-Ca3ASx7C.js";import"./useFormValidation-DCrH4OQY.js";import"./useFormReset-C4J5P-lS.js";import"./AlertText-BDrbtAj0.js";import"./AlertIcon-B2R_BHtC.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const De=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,De as __namedExportsOrder,We as default};
