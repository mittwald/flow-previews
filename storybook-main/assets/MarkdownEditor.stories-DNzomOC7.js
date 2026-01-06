import{j as r,r as x}from"./iframe-Dnm846PF.js";import{b as n,u as a,F as p,t as E}from"./Form-B68Gpafo.js";import{L as s}from"./Label-CfPB20lW.js";import{R as u,S as c}from"./ResetButton-BcLsTpCu.js";import{B as l}from"./Button-D3IXyzzj.js";import{S as j}from"./Section-D9UON_ke.js";import{A as b}from"./ActionGroup-BXn_SmSG.js";import{s as d}from"./Action-emK0mmvz.js";import{M as m}from"./MarkdownEditor-Cm3_GFaA.js";import{F as g}from"./FieldError-Ze0pQjLj.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CwAvPpRM.js";import"./flowComponent-S63Cq1sy.js";import"./index-Db1dbbsL.js";import"./clsx-B-dksMZM.js";import"./index-sBHKlQZD.js";import"./useLocalizedStringFormatter-BqtI09-_.js";import"./context-CoOH5oCy.js";import"./browser-DEiAhc6G.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B2apKb0w.js";import"./utils-VDIU0BnD.js";import"./Hidden-1UUWpuD7.js";import"./useRef-opIQLsXY.js";import"./IconWarning-CExbEpDP.js";import"./remote-XcyFsW5Q.js";import"./Text-DtZxu6g8.js";import"./EmulatedBoldText-DH6NWkOG.js";import"./Text-1v5GZWlz.js";import"./LoadingSpinner-DASF7rgv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B-4mNKoj.js";import"./ProgressBar-BIFWcEy_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-pLNL7Cvk.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CU4gAXU4.js";import"./useFocus-D-7SE4fF.js";import"./useFocusRing-CANRw9LC.js";import"./useFocusable-DgTTkttD.js";import"./ContextMenuSection-C10PM8Bo.js";import"./Dialog-BfuTmdIH.js";import"./RSPContexts-DkLfIxB1.js";import"./OverlayArrow-B81MSBvx.js";import"./useControlledState-CkFAdRGn.js";import"./Collection-CfmXzWv2.js";import"./CollectionBuilder-1cEuD-Tq.js";import"./SelectionIndicator-B7sCGTL_.js";import"./Separator-D5s42kTO.js";import"./SelectionManager-Bx2R39VR.js";import"./useEvent-CkeCMC1K.js";import"./useCollator-mQoUFjwt.js";import"./FocusScope-DH4o0wc_.js";import"./VisuallyHidden-C6zUvnKf.js";import"./getActionGroupSlot-D_nb0VqF.js";import"./useStatic-D4cjHvMF.js";import"./context-CfRQ154N.js";import"./Markdown-CxbK-b_2.js";import"./CodeBlock-CB3BedNs.js";import"./CopyButton-B17Z970t.js";import"./Tooltip-BYxU1nML.js";import"./react-children-utilities-DtWvBFBF.js";import"./Heading-DIDy3S_I.js";import"./Heading-BVtLIbvB.js";import"./InlineCode-D9YsyvET.js";import"./Link-CvmmRiOt.js";import"./Separator-DSeDqaWC.js";import"./TextArea-CimIM4CP.js";import"./TextFieldBase-upbtEiSd.js";import"./FieldDescription-ChdNC9CF.js";import"./useFieldComponent-CW3QYPg0.js";import"./TextField-D1pKbmJx.js";import"./FieldError-BJ4Wbc9z.js";import"./Form-DyzgNsfN.js";import"./Group-Btcmd8Qw.js";import"./Input-vek2Lmza.js";import"./useTextField-DiJp1aL-.js";import"./useFormReset-BiFYZY7a.js";import"./useFormValidation-CGpO-wMA.js";import"./useControlledHostValueProps-CsRpP7Fh.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const Zr=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,Zr as __namedExportsOrder,Xr as default};
