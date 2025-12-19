import{j as r,r as x}from"./iframe-bJ_6fidF.js";import{b as n,u as a,F as p,t as E}from"./Form-Bkk_2nLu.js";import{L as s}from"./Label-jHNg7W3d.js";import{R as u,S as c}from"./ResetButton-LNdHyolG.js";import{B as l}from"./Button-BnsDuM8z.js";import{S as j}from"./Section-BIKV3qXu.js";import{A as b}from"./ActionGroup-CQfsB-uK.js";import{s as d}from"./Action-BNfya_PE.js";import{M as m}from"./MarkdownEditor-DZ5WjYuD.js";import{F as g}from"./FieldError-D9NzXF8I.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B98QrFwh.js";import"./flowComponent-Dc3IE02E.js";import"./index-BiU4KtXW.js";import"./clsx-B-dksMZM.js";import"./index-DZS8fxXA.js";import"./useLocalizedStringFormatter-DVRf4Nef.js";import"./context-BRobVGip.js";import"./browser-CDYbiXXK.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-ITTSHdKZ.js";import"./utils-2JACcOpK.js";import"./Hidden-D-D3cT6t.js";import"./useRef-IidQQV9-.js";import"./IconWarning-BRVy1IKm.js";import"./remote-BGnMaeOw.js";import"./Text-38_GgC7q.js";import"./EmulatedBoldText-0Pd-4dNn.js";import"./Text-BK6SVPNL.js";import"./LoadingSpinner-Da58qKyF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CFn0JrTH.js";import"./ProgressBar-B339qPNf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DgCjbnqL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DUWDHSym.js";import"./useFocus-DCEJi5pX.js";import"./useFocusRing-BfXNN7l5.js";import"./useFocusable-s9iArTw-.js";import"./ContextMenuSection-CO0mnEOv.js";import"./Dialog-DXm38-Rd.js";import"./RSPContexts-Du7Xg6Jz.js";import"./OverlayArrow-BzF-2SH6.js";import"./useControlledState-DiZTTo94.js";import"./Collection-BtgF6RLC.js";import"./CollectionBuilder-CsK04tEC.js";import"./SelectionIndicator-smcarjhT.js";import"./Separator-DIVM-WQV.js";import"./SelectionManager-oHLM6Xvs.js";import"./useEvent-CVxS1Lwc.js";import"./useCollator-BcEDrZTh.js";import"./FocusScope-C6rup_Tq.js";import"./VisuallyHidden-BLAg7qtf.js";import"./getActionGroupSlot-B0EdTSi2.js";import"./useStatic-BZPvcAPs.js";import"./context-CiNdmr3l.js";import"./Markdown-DzvyprFR.js";import"./CodeBlock-Dr8V6Qs_.js";import"./CopyButton-Bfg0R5ht.js";import"./Tooltip-Dgd1avx8.js";import"./react-children-utilities-pHPFqe5c.js";import"./Heading-DKGadcRU.js";import"./Heading-Bbyv6ScP.js";import"./InlineCode-CpHJscMZ.js";import"./Link-Dn5sw_YH.js";import"./Separator-sKO4ytK0.js";import"./TextArea-0qzT2LgT.js";import"./TextFieldBase-DP_yQhHd.js";import"./FieldDescription-CvkvDToJ.js";import"./useFieldComponent-uPh6Au6A.js";import"./TextField-D6yUSkG5.js";import"./FieldError-BXkLcNaX.js";import"./Form-u1KpLyfA.js";import"./Group-DIFUJtkh.js";import"./Input-Cc8ouKNt.js";import"./useTextField-BE6Uy-6e.js";import"./useFormReset-nMFTazsC.js";import"./useFormValidation-CfG5OslG.js";import"./useControlledHostValueProps-TNG0Fwfb.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Xr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
