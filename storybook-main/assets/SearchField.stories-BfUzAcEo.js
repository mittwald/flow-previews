import{r as S,j as r}from"./iframe-C2cGCWBO.js";import{a as n,u as p,F as a,R as u,S as l,t as x}from"./ResetButton-No661t4l.js";import{L as m}from"./Label-DU1BG4Ln.js";import{B as d}from"./Button-B41LUuF3.js";import{S as j}from"./Section-Di6ob6Kp.js";import{A as b}from"./ActionGroup-CWoZwwxK.js";import{s as c}from"./ActionBatch-BZcBHaPT.js";import{S as s}from"./SearchField-Di993LrF.js";import{F as E}from"./FieldError-DDTF9njD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DhyEqTLI.js";import"./flowComponent-C6jxxEVz.js";import"./index-rbmoV-yM.js";import"./clsx-B-dksMZM.js";import"./index-Du1kNfMe.js";import"./useLocalizedStringFormatter-BAIjrI3d.js";import"./context-2EfdQWx2.js";import"./ActionGroupView-BtuZ06wd.js";import"./Content-CCqXW7YM.js";import"./Heading-BMwLGtkc.js";import"./Heading-Dg4rLfib.js";import"./RSPContexts-YUPb13EG.js";import"./utils-CPzpSZL2.js";import"./Text-D3xXIOyH.js";import"./browser-BGhQMCSV.js";import"./EmulatedBoldText-CQEy9dVT.js";import"./Text-D1LgYL-c.js";import"./Modal-Dch_39m9.js";import"./Overlay-BChO2yc4.js";import"./useOverlayController-CtyPLm8k.js";import"./useStatic-DUMwmPN3.js";import"./OverlayContextProvider-BBwaePGz.js";import"./LoadingSpinner-DIaaAh-V.js";import"./IconWarning-C4LD0r9W.js";import"./remote-w8RrxnGT.js";import"./Dialog-BW6BpcVd.js";import"./Button-BneP87GG.js";import"./ProgressBar-DV5MetAr.js";import"./Label-DeWWh5Nd.js";import"./Hidden-C_zHVHDn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DicB4RC2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BrmD8Kf2.js";import"./useFocus-O4uYrVbU.js";import"./useFocusRing-wtbg8X8X.js";import"./useFocusable-DwbuT13T.js";import"./OverlayArrow-DkMjnDr5.js";import"./useControlledState-MMDjipcl.js";import"./Collection-BNpysMuG.js";import"./CollectionBuilder-Bu0heHOT.js";import"./SelectionIndicator-vr7baVWi.js";import"./Separator-Dz7Bhpa-.js";import"./SelectionManager-BVOuQNja.js";import"./useEvent-Brb253L4.js";import"./useCollator-CsE89UJT.js";import"./FocusScope-7k8F4i3d.js";import"./VisuallyHidden-C7EnMW_k.js";import"./ButtonView-Bho7TPlx.js";import"./Flex-D4R0lKsm.js";import"./useRef-DXSgO37m.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DuK0dlwa.js";import"./getActionGroupSlot-C9frEoU7.js";import"./useFieldComponent-D_KC3UxI.js";import"./useControlledHostValueProps-DVj9QfFb.js";import"./FieldError-DA6JIYnG.js";import"./Form-C_NaUn2t.js";import"./Group-j7ZfmdDn.js";import"./Input-B5OLadjP.js";import"./useTextField-Du5NSzvr.js";import"./useFormReset-BdRaO3QH.js";import"./useFormValidation-DV5s_XV1.js";import"./AlertText-DYOBaLM3.js";import"./AlertIcon-B9QySSBk.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),g(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Yr as __namedExportsOrder,Vr as default};
