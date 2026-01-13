import{j as r,r as x}from"./iframe-D5OSMSYj.js";import{b as n,u as a,F as p,t as E}from"./Form-D7Km85yr.js";import{L as s}from"./Label-CF1-K3Zk.js";import{R as u,S as c}from"./ResetButton-CVZRCqdy.js";import{B as l}from"./Button-DTe5su69.js";import{S as j}from"./Section-Dz5Ps6FG.js";import{A as b}from"./ActionGroup-EdAZBuJq.js";import{s as d}from"./Action-7Qb19ota.js";import{M as m}from"./MarkdownEditor-N6Qyvcz8.js";import{F as g}from"./FieldError-DkXkFVgN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B1x5IqP1.js";import"./flowComponent-CcKBrJMM.js";import"./index-B83pCPPs.js";import"./clsx-B-dksMZM.js";import"./index-Bwk6EGM5.js";import"./useLocalizedStringFormatter-BQCOTIex.js";import"./context-CCC3vGzE.js";import"./browser-CPg_spJX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bh0iBwH8.js";import"./utils-B2fStg81.js";import"./Hidden-NmD_pG7l.js";import"./useRef-DSYCD1f5.js";import"./IconWarning-aBoV8v8e.js";import"./remote-DoBIDVY0.js";import"./Text-DAhCT_ah.js";import"./EmulatedBoldText-Dm6vKeJS.js";import"./Text-DxpiEtGq.js";import"./LoadingSpinner-BD9yQcJP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CTfGmXCg.js";import"./ProgressBar-Dg6iR4wK.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQkx52KA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Db_mMnan.js";import"./useFocus-C6h-AdFL.js";import"./useFocusRing-D5zyjxEp.js";import"./useFocusable-BBmYajA6.js";import"./ContextMenuSection-DdCYek15.js";import"./Dialog-DOlt_k3K.js";import"./RSPContexts-BzWalm_3.js";import"./OverlayArrow-Ck8v0z1s.js";import"./useControlledState-BLX_f1Wx.js";import"./Collection-DJCIfP6r.js";import"./CollectionBuilder-b-gCN1Vs.js";import"./SelectionIndicator-BCMQtvaW.js";import"./Separator-BUClO3qk.js";import"./SelectionManager-flPals8o.js";import"./useEvent-Bc0Gn0fF.js";import"./useCollator-BW95ADKZ.js";import"./FocusScope-fzjvqtWs.js";import"./VisuallyHidden-arLJjMse.js";import"./getActionGroupSlot-BAkzknoy.js";import"./useStatic-Ct4NfCBd.js";import"./context-g3auhbgQ.js";import"./Markdown-Dsfv2jpJ.js";import"./CodeBlock-BfMnKmLj.js";import"./CopyButton-Ed8SLshv.js";import"./Tooltip-CloE64M8.js";import"./react-children-utilities-BKdWvkEI.js";import"./Heading-CnkvXclq.js";import"./Heading-BpBqAeXs.js";import"./InlineCode-BiCZL1Bd.js";import"./Link-D6eMXHDa.js";import"./Separator-DAEr-kPT.js";import"./TextArea-CJHfpIwm.js";import"./TextFieldBase-B8fMcfN9.js";import"./FieldDescription--3BD_Kcq.js";import"./useFieldComponent-yQbkUBpw.js";import"./TextField-TgU68DEX.js";import"./FieldError-SdvWZoRR.js";import"./Form-RJ7gT7dr.js";import"./Group-DPq_fDos.js";import"./Input-DK63hDT9.js";import"./useTextField-CYoB5YV1.js";import"./useFormReset-C4H0cf_a.js";import"./useFormValidation-BzDFxNXO.js";import"./useControlledHostValueProps-d9R3T6JC.js";import"./AlertText-BnzdsAWE.js";import"./AlertIcon-CDVTToII.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),$r={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ro=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,ro as __namedExportsOrder,$r as default};
