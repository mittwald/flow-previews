import{j as r,r as F}from"./iframe-CgV0BA21.js";import{a as l,u as a,F as c,t as h}from"./Form-Njtp-qwK.js";import{L as s}from"./Label-Bxuf1S0W.js";import{B as t}from"./Button-CNT8DxS9.js";import{S as x}from"./Section-sLT7TF5r.js";import{A as j}from"./ActionGroup-uSz-erXb.js";import{s as u}from"./Action-DZ2Xrd6d.js";import{F as m}from"./FileField-DHvkCqtR.js";import{F as S}from"./useFieldComponent-D1IKYPO_.js";import"./index-nuYtCEEu.js";import"./flowComponent-C-HH3qvd.js";import"./index-DDuhgqRy.js";import"./clsx-B-dksMZM.js";import"./index-LOR_5P9o.js";import"./useLocalizedStringFormatter-ByloWLWI.js";import"./context-DHnf2uKc.js";import"./browser-BkNcCpiL.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CttY7hce.js";import"./utils-BtxgbS4l.js";import"./Hidden-jMQa5TyR.js";import"./IconWarning-Cjg_6qhe.js";import"./Text-BKw3N1Oz.js";import"./EmulatedBoldText-DlIqC6uZ.js";import"./Text-DoKxmv7q.js";import"./LoadingSpinner-CAf9aLu0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DxfThd7-.js";import"./ProgressBar-Buubgbe8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B3KDK_sh.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dh998neg.js";import"./useFocus-DCA5O52l.js";import"./useFocusRing-D4YLibcx.js";import"./useFocusable-CmuVkcp6.js";import"./ContextMenuSection-DduOvbG6.js";import"./Dialog-BuxTXh7Q.js";import"./RSPContexts-B0Fd51Ht.js";import"./OverlayArrow-B-9LgXoP.js";import"./useControlledState-REzwF7fx.js";import"./Collection-PQKx517l.js";import"./CollectionBuilder-BH1gKqtM.js";import"./SelectionIndicator-Bn-FIAma.js";import"./Separator-DWGZbVju.js";import"./SelectionManager-QPmO5O-V.js";import"./useEvent-DaVswHd3.js";import"./useCollator-vRN69CzX.js";import"./FocusScope-0arVmBSz.js";import"./VisuallyHidden-7bLCXWCd.js";import"./dynamic-BuNxxpAs.js";import"./getActionGroupSlot-rfX1hTYj.js";import"./useStatic-BN9Sd72d.js";import"./context-CRjcTZWJ.js";import"./useFormValidation-AnXxOg_8.js";import"./Input-CWgJEKQk.js";import"./useMakeFocusable-BcUeToCB.js";import"./react-children-utilities-D5-pLFdL.js";import"./ClearPropsContext-BLhIxcUa.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,b=y("submit"),Cr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async f=>{await u(5e3),b(f)},d=a({defaultValues:{user:""}}),p=h();return r.jsx(c,{form:d,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(p,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx(j,{children:r.jsx(t,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(t,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const _r=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,_r as __namedExportsOrder,Cr as default};
