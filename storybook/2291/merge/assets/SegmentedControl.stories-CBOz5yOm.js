import{j as e,r as g}from"./iframe-CGL3Ztd8.js";import{a,u as l,F as c,t as j,R as p,S as h}from"./ResetButton-Df-4v6uT.js";import{L as i}from"./Label-BdVzzMHl.js";import{B as d}from"./Button-CdFi_Gvp.js";import{S as F}from"./Section-DahycNJE.js";import{A as b}from"./ActionGroup-CrScu9QD.js";import{s as u}from"./Action-D7FDWjoF.js";import{S as s,a as r}from"./Segment-Bj7USftx.js";import{F as v}from"./FieldError-Bg6s6kv2.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C8bvHICk.js";import"./flowComponent-WiCTTjdG.js";import"./index-P9tp8qCw.js";import"./clsx-B-dksMZM.js";import"./index-eHspQkB2.js";import"./useLocalizedStringFormatter-BjebV3sn.js";import"./context-BN4qQIb1.js";import"./useRef-BOtt9UAz.js";import"./utils-BPLHaINM.js";import"./ButtonView-DVA4InJ8.js";import"./browser-Dk-cIrUN.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BHYpf9e5.js";import"./Hidden-CROh8dKk.js";import"./IconWarning-CMBZCdTm.js";import"./remote-DEzwzibY.js";import"./Text-_sa0OuU0.js";import"./EmulatedBoldText-CAg0SlO2.js";import"./Text-BKxs7Hdx.js";import"./LoadingSpinner-ChXboWO2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CySqxiup.js";import"./ProgressBar-C4R_ruZv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dh-HsBYa.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BpWTOkQr.js";import"./useFocus-XDda6gbt.js";import"./useFocusRing-BtxSiiWP.js";import"./useFocusable-MZ2jhLFm.js";import"./ContextMenuSection-DZtKonlo.js";import"./Dialog-D5rIpj4K.js";import"./RSPContexts-Dbu6eLkb.js";import"./OverlayArrow-BX1C_Ifh.js";import"./useControlledState-DjoZo3jd.js";import"./Collection-De-gN1c8.js";import"./CollectionBuilder-DX9xRdaS.js";import"./SelectionIndicator-CKCmLDiO.js";import"./Separator-CQ2yo0aI.js";import"./SelectionManager-BkQuw4FT.js";import"./useEvent-C3Ld1mH0.js";import"./useCollator-COOm3BGU.js";import"./FocusScope-CzHXyZUV.js";import"./VisuallyHidden-DvGmoJqV.js";import"./getActionGroupSlot-D2X8q845.js";import"./useStatic-aF_CYkuk.js";import"./context-B-HkcFzY.js";import"./useFieldComponent-CHIggLRE.js";import"./useMakeFocusable-Cue-GwYJ.js";import"./RadioGroup-BQDvw_ZI.js";import"./FieldError-CZz7QnF8.js";import"./Form-Ba7VKjcY.js";import"./useFormValidation-DhAeSygX.js";import"./useFormReset-C_UBUwcF.js";import"./AlertText-AGSpHO8N.js";import"./AlertIcon-DM1knw9_.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,A=E("submit"),We={title:"Integrations/React Hook Form/SegmentedControl",component:a,render:()=>{const t=async x=>{await u(5e3),A(x)},S=l({defaultValues:{user:""}}),f=j();return e.jsx(c,{form:S,onSubmit:t,children:e.jsxs(F,{children:[e.jsx(f,{name:"user",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(b,{children:[e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})]})})}},o={},n={render:()=>{const t=l();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsxs(s,{isInvalid:!0,children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(v,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const t=l();return e.jsxs(c,{form:t,onSubmit:async()=>await u(2e3),children:[e.jsx(a,{name:"field",children:e.jsxs(s,{children:[e.jsx(i,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(d,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(d,{onPress:()=>t.setFocus("field"),children:"focus through form"}),e.jsx(p,{children:"Reset"}),e.jsx(h,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
