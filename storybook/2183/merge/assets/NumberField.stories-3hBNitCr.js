import{j as r,r as x}from"./iframe-BmKAGSU1.js";import{b as a,u as l,F as d,t as j}from"./Form-BUFqVqMY.js";import{L as o}from"./Label-8kdX7ehW.js";import{R as c,S as f}from"./ResetButton-AYS94spP.js";import{B as p}from"./Button-LvEI1uQm.js";import{S as b}from"./Section-Bl2UAmSX.js";import{A as g}from"./ActionGroup-C3uaClAH.js";import{s as u}from"./Action-DOyYDw1l.js";import{N as t}from"./NumberField-DKXN_xr8.js";import{F as E}from"./FieldDescription-C007Rd_u.js";import{F as S}from"./FieldError-DTx5qYoC.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-4IbUBFl1.js";import"./flowComponent-GoF2pcsM.js";import"./index-Dy22JExn.js";import"./clsx-B-dksMZM.js";import"./index-D3Sif_iZ.js";import"./useLocalizedStringFormatter-wjV9WHNF.js";import"./context-CxuOL-5x.js";import"./browser-SWtWUPW6.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CQLEPw36.js";import"./utils-g5fx1pEf.js";import"./Hidden-tXnJ8R5f.js";import"./useRef-BPZx9XSF.js";import"./IconWarning-imbji-Kz.js";import"./remote-DfYMV5Tv.js";import"./Text-C9Y-BRqi.js";import"./EmulatedBoldText-DkbId6Zn.js";import"./Text-CWVum_CA.js";import"./LoadingSpinner-ZBVW6cS6.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C5vvsijg.js";import"./ProgressBar-Cladi115.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-gR0_832q.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-JhlebSO6.js";import"./useFocus-BW6_4Fc3.js";import"./useFocusRing-DBug8spT.js";import"./useFocusable-BP0ye7iu.js";import"./ContextMenuSection-ChJFKHwG.js";import"./Dialog-DjPgQ4DH.js";import"./RSPContexts-BuF39hXg.js";import"./OverlayArrow-B9cbB1QQ.js";import"./useControlledState-TVCSEq66.js";import"./Collection-DGvFsPwb.js";import"./CollectionBuilder-CAguRQCp.js";import"./SelectionIndicator-tnK26Qqc.js";import"./Separator-D_YsxVNC.js";import"./SelectionManager-ohd2qk3I.js";import"./useEvent-B00NxYME.js";import"./useCollator-3U7lxjuh.js";import"./FocusScope-ByKxlNca.js";import"./VisuallyHidden-Db2xRfqF.js";import"./getActionGroupSlot-DaWwHLLH.js";import"./useStatic-7Dbn5SyA.js";import"./context-B4Nnt3qw.js";import"./useFieldComponent-DWe8fYc4.js";import"./useControlledHostValueProps-ByJyWAjG.js";import"./FieldError-DtXh5FLR.js";import"./Form-B3BOXvjK.js";import"./Group-zAJTMebT.js";import"./Input-aV6cWdAR.js";import"./useFormValidation-BWMCHu6j.js";import"./useSpinButton-Isy5a7J9.js";import"./useFormReset-DXCfJDY-.js";import"./useTextField-DiMLAs4x.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Tr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(g,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Yr as __namedExportsOrder,Tr as default};
