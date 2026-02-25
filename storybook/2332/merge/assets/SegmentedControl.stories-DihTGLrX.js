import{r as g,j as e}from"./iframe-PZSwL5UI.js";import{a,u as l,F as c,R as p,S as h,t as j}from"./ResetButton-DSe7vvOE.js";import{L as i}from"./Label-DHad4C3T.js";import{B as d}from"./Button-Dx8ytIXV.js";import{S as F}from"./Section-Ly32yzfQ.js";import{A as b}from"./ActionGroup-CuC620Qy.js";import{s as u}from"./ActionBatch-KmZgQ_FO.js";import{S as s,a as r}from"./Segment-Dgr6GP3t.js";import{F as v}from"./FieldError-DI2vGfZA.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DDVyub9n.js";import"./flowComponent-B2U-3AiS.js";import"./index-xzvR7-Gw.js";import"./clsx-B-dksMZM.js";import"./index-Da7vmrj1.js";import"./useLocalizedStringFormatter-DRymnkwE.js";import"./context-Ff7U_4vz.js";import"./ActionGroupView-CIbffeee.js";import"./Content-DRuiMhgn.js";import"./Heading-DkYLS7Fi.js";import"./Heading-DxHx-m9x.js";import"./RSPContexts-TcotrMre.js";import"./utils-lOj21ZD_.js";import"./Text-CkpR2hqn.js";import"./browser-Ds1bEyov.js";import"./EmulatedBoldText-CuqW50TP.js";import"./Text-BG-2dzKS.js";import"./Modal-C7FSQX3Q.js";import"./useOverlayController-BVZAJrcY.js";import"./useStatic-Bw6k9Sf5.js";import"./Overlay-DZSkN4bv.js";import"./OverlayContextProvider-DVB3ck2o.js";import"./LoadingSpinner-kHlSwNnH.js";import"./IconWarning-Brl3hUMe.js";import"./remote-mdYu2fN6.js";import"./Dialog-BxivZnjn.js";import"./Button-BQZ9yYEV.js";import"./ProgressBar-CH3LzA0o.js";import"./Label-e4m8Xdvz.js";import"./Hidden-0gux2v4t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-N6JTHu_p.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B1ZCcdw8.js";import"./useFocus-BI7y428A.js";import"./useFocusRing-C-2IcVPM.js";import"./useFocusable-B4WRTgkS.js";import"./OverlayArrow-Cvgp3jMH.js";import"./useControlledState-DIXXzqms.js";import"./Collection-D6QzoLja.js";import"./CollectionBuilder-o3rgBYyM.js";import"./SelectionIndicator-CKNEQhdD.js";import"./Separator-DApvHFcW.js";import"./SelectionManager-D57zfRFA.js";import"./useEvent-WDBpmbG3.js";import"./useCollator-DzxVKGp5.js";import"./FocusScope-BkNZ8LpG.js";import"./VisuallyHidden-UxX7HzEl.js";import"./ButtonView-XkIAqQ4n.js";import"./Flex-Bs1WbtgB.js";import"./useRef-BIiAMvRM.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-B4TWz5w1.js";import"./getActionGroupSlot-Dj7srP7C.js";import"./useFieldComponent-BUmkKSsK.js";import"./useMakeFocusable-DMtEky_M.js";import"./RadioGroup-DjZYqbnZ.js";import"./FieldError-mE8Rrcl-.js";import"./Form-BblXnLIP.js";import"./useFormValidation-BFZ87yhB.js";import"./useFormReset-DtrcblTn.js";import"./AlertText-CY4BBxtN.js";import"./AlertIcon-BtM4zuia.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ue={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Ve=["Default","WithFieldError","WithFocus"];export{o as Default,n as WithFieldError,m as WithFocus,Ve as __namedExportsOrder,Ue as default};
