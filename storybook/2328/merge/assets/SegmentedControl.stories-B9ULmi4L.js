import{r as g,j as e}from"./iframe-olJof__V.js";import{a,u as l,F as c,R as p,S as h,t as j}from"./ResetButton-BRjZN70o.js";import{L as i}from"./Label-6dyeRQav.js";import{B as d}from"./Button-CPlz8rsS.js";import{S as F}from"./Section-xajLDDkQ.js";import{A as b}from"./ActionGroup-7XqXhcJT.js";import{s as u}from"./ActionBatch-DqsTFo-5.js";import{S as s,a as r}from"./Segment-Bcq_ZE3W.js";import{F as v}from"./FieldError-l4UC5eIi.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C_FBHMxE.js";import"./flowComponent-CoGNni0d.js";import"./index-DXuGOHKQ.js";import"./clsx-B-dksMZM.js";import"./index-CQizCcaV.js";import"./useLocalizedStringFormatter-DTXdFjR3.js";import"./context-DOTF4vQp.js";import"./ActionGroupView-wpokCcfL.js";import"./Content-BTv2gojb.js";import"./Heading-CFjejIim.js";import"./Heading-CZbujKCp.js";import"./RSPContexts-BVirgRiO.js";import"./utils-B7tchdhx.js";import"./Text-Dd-S15-B.js";import"./browser-IACFT9IC.js";import"./EmulatedBoldText-BFx3xjvZ.js";import"./Text-PinZmeRI.js";import"./Modal-DS-pjQYs.js";import"./useOverlayController-CA843Gf5.js";import"./useStatic-DVdbIJHO.js";import"./Overlay-CYa-63WO.js";import"./OverlayContextProvider-DbMF0xyh.js";import"./LoadingSpinner-CT-rb4W5.js";import"./IconWarning-Dxqo3db7.js";import"./remote-BFSWQwUW.js";import"./Dialog-DOR07iZd.js";import"./Button-BzbIVXwM.js";import"./ProgressBar-CgXlpLJ2.js";import"./Label-DdZBH8rR.js";import"./Hidden-DoUj_dUj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CtYRRhYq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-UZLq5kUQ.js";import"./useFocus-C7qSpl6p.js";import"./useFocusRing-D32aTWMq.js";import"./useFocusable-3WtiVhvt.js";import"./OverlayArrow-B-0VQUib.js";import"./useControlledState-CGGJ5ydn.js";import"./Collection-WZVC-4xi.js";import"./CollectionBuilder-vpp5jjd8.js";import"./SelectionIndicator-D2HcZFFA.js";import"./Separator-8BcW__js.js";import"./SelectionManager-DXB33zuh.js";import"./useEvent-CNSbk4we.js";import"./useCollator-DxO-TF_t.js";import"./FocusScope-Db9L4ciT.js";import"./VisuallyHidden-D0VqbVmf.js";import"./ButtonView-BwM21LNf.js";import"./Flex-6XeWCvWa.js";import"./useRef-BVHeJ4xv.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-C9tKIY6H.js";import"./getActionGroupSlot-CoFa2pz_.js";import"./useFieldComponent-BI2nSVzd.js";import"./useMakeFocusable-B2LuhDHE.js";import"./RadioGroup-CbhhHe1q.js";import"./FieldError-kWwHEGnK.js";import"./Form-C73O4P0Z.js";import"./useFormValidation-D5cIPr0y.js";import"./useFormReset-BYGWiUrU.js";import"./AlertText-DHxSCH5W.js";import"./AlertIcon-DL26tbpe.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),Ue={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
