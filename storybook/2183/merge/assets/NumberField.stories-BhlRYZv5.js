import{j as r,r as x}from"./iframe-XAYsosb6.js";import{u as a,F as l}from"./Form-DqPzFL2x.js";import{L as o}from"./Label-CXTzqQ-l.js";import{F as d,t as j}from"./Field-VXW9JPpJ.js";import{B as u}from"./Button-BxhqNEtZ.js";import{S as g}from"./Section-j_rAfVvf.js";import{A as b}from"./ActionGroup-cuM3yDJU.js";import{s as p}from"./Action-Sm7peXAz.js";import{N as t}from"./NumberField-yEPBk9lI.js";import{F as E}from"./FieldDescription-hqNXMC67.js";import{F as S}from"./FieldError-BTxqYaQG.js";import{R as c}from"./ResetButton-B62cOFiN.js";import{S as f}from"./SubmitButton-Dh3QD1LP.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CF4AtnhZ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BgSAAcwE.js";import"./index-DT-o6Yom.js";import"./index-CuyBkc62.js";import"./useLocalizedStringFormatter-CIJR_8KJ.js";import"./context-B1g6MDkd.js";import"./Label-jhCIdmWo.js";import"./utils-mpNKu3Qr.js";import"./Hidden-BXwhawaS.js";import"./dynamic-CAhkKb1T.js";import"./IconChevronDown-CLHuWDBx.js";import"./remote-DUrH5qha.js";import"./IconX-BuTdVgor.js";import"./IconCheck-CATZaWGa.js";import"./Text-D0dxXYDJ.js";import"./EmulatedBoldText-CnKUILfp.js";import"./Text-DoECDV-v.js";import"./LoadingSpinner-BRBaERdC.js";import"./ariaLive-Z7x17Sr2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bqhr8ozs.js";import"./ProgressBar-BRENX_vG.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-vx5-dYQf.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqzrclQw.js";import"./useFocus-6tpgkBNV.js";import"./useFocusRing-Dezl-MaY.js";import"./useFocusable-NtGVjwhY.js";import"./ContextMenuSection-PBWMY4Bl.js";import"./lib-90ocxLs-.js";import"./Dialog-B6Y78fzh.js";import"./RSPContexts-DZiMI1g6.js";import"./OverlayArrow-TFGGeUC5.js";import"./useControlledState-DFlLGPV3.js";import"./Collection-DT0XSz1p.js";import"./CollectionBuilder-7sWRFWqn.js";import"./SelectionIndicator-CzOKaojY.js";import"./Separator-CYgNn2Xy.js";import"./SelectionManager-moo-j50V.js";import"./useEvent-BPTus2_l.js";import"./useCollator-Bwevici6.js";import"./FocusScope-utk7FKt0.js";import"./VisuallyHidden-BgleADuq.js";import"./getActionGroupSlot-DqFoxLUz.js";import"./useStatic-CmdDHpQe.js";import"./context-CKFjVc7D.js";import"./useFieldComponent-D6Qiol7C.js";import"./IconChevronUp-Bj-qzFbP.js";import"./IconMinus-9BXY65sK.js";import"./IconPlus-DEdYp4LN.js";import"./useControlledHostValueProps-DQzvB4PR.js";import"./FieldError-DKscD9VY.js";import"./Form-CdD0eZj8.js";import"./Group-70bt3PCe.js";import"./Input-Wj2hF-sT.js";import"./useFormValidation-L0cY-070.js";import"./useSpinButton-VKB58_Om.js";import"./useFormReset-B8jo6HhA.js";import"./useTextField-CEUS6wUT.js";import"./IconDanger-Bj-mV1cE.js";import"./useRef-dY3yzYQ4.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Qr={title:"Integrations/React Hook Form/NumberField",component:d,render:()=>{const e=async F=>{await p(1500),B(F)},h=a({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(l,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...n.parameters?.docs?.source}}};const Xr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Xr as __namedExportsOrder,Qr as default};
