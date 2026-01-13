import{j as r,r as x}from"./iframe-YnzBkBP1.js";import{b as l,u as a,F as c,t as j}from"./Form-BEcwLgvh.js";import{L as s}from"./Label-F32H6fZQ.js";import{R as d,S as p}from"./ResetButton-DTcZkv1G.js";import{B as t}from"./Button-BvFsSv02.js";import{S}from"./Section-BF-oFw9b.js";import{A as b}from"./ActionGroup-Cw5QmZ4Y.js";import{s as u}from"./Action-DDQNlr1F.js";import{F as m}from"./FileField-B9T6IyEE.js";import{F as B}from"./FieldError-CkABddBr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DAiG6Vmq.js";import"./flowComponent-CxoafP0O.js";import"./index-CbL05fU3.js";import"./clsx-B-dksMZM.js";import"./index-C9L7IfWC.js";import"./useLocalizedStringFormatter-6QnOnkyA.js";import"./context-Dc351FW_.js";import"./browser-Sf85iaAd.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-TsHYY7iw.js";import"./utils-CRkRQkMM.js";import"./Hidden-Dq31wpMg.js";import"./useRef-Db3bAIIe.js";import"./IconWarning-CfrgrK5w.js";import"./remote-psJ_k7Km.js";import"./Text-CErt044E.js";import"./EmulatedBoldText-Dl4jMQ55.js";import"./Text-C_7kOqPJ.js";import"./LoadingSpinner-z9BQWCCX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DfMPCk5A.js";import"./ProgressBar-139JbARe.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DyCvkQuz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-NgaP4MvP.js";import"./useFocus-CEJfh5Ox.js";import"./useFocusRing-B9e_t0Os.js";import"./useFocusable-BIzKoTBr.js";import"./ContextMenuSection-Bzcd8RVm.js";import"./Dialog-971pU4tV.js";import"./RSPContexts-Mp6syAgQ.js";import"./OverlayArrow--71CUfvh.js";import"./useControlledState-DwL8StHF.js";import"./Collection-FfZcU2DX.js";import"./CollectionBuilder-DNUE6McV.js";import"./SelectionIndicator-DnZvOIyV.js";import"./Separator-h_x_t96Z.js";import"./SelectionManager-rmSH4beD.js";import"./useEvent-CmRPI6I-.js";import"./useCollator-BTyxNuGL.js";import"./FocusScope-D2Uy30lG.js";import"./VisuallyHidden-BsENeWhO.js";import"./getActionGroupSlot-BNJAUwyr.js";import"./useStatic-9o3ywd_N.js";import"./context-CGFBFC28.js";import"./useFormValidation-MbSolyNi.js";import"./FieldError-BIVQARwB.js";import"./Input-9KD990Lp.js";import"./useFieldComponent-BnDxVRXr.js";import"./AlertText-D2cGz-gI.js";import"./AlertIcon-DE5OYWVT.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Ar={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const Ir=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Ir as __namedExportsOrder,Ar as default};
