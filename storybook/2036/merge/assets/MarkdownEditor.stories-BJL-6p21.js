import{j as r}from"./iframe-BxDpVhRd.js";import{a as c,u as d,F as l,t as g}from"./Form-CR4vr6SN.js";import{L as h}from"./Label-CMeeurCB.js";import{B as m}from"./Button-COfabfFq.js";import{S}from"./Section-DXdLzCuH.js";import{A as y}from"./ActionGroup-DNCuAw2y.js";import{s as x}from"./Action-CQ_Tet5k.js";import{M as f}from"./MarkdownEditor-CJdvB0rR.js";import"./index-Cun1SEai.js";import"./dynamic-ByIuCnCH.js";import"./PropsContextProvider-D577-dj4.js";import"./mergeRefs-Bevg5I71.js";import"./index-BnQUCq-S.js";import"./clsx-B-dksMZM.js";import"./FieldError-Bmq-pcAK.js";import"./IconWarning-CR1PBxFk.js";import"./FieldError-BrR5GiZM.js";import"./utils-CpjREF5t.js";import"./Text-Bq0GBBEx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BeMG850z.js";import"./context-CSPhd592.js";import"./browser-DkE4SP-u.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CcH2uIQ5.js";import"./Hidden-sa0o7Y_i.js";import"./Text-HfVZjSfr.js";import"./EmulatedBoldText-Di64OaFb.js";import"./LoadingSpinner-D1vbb_I_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CJ12dAAc.js";import"./ProgressBar-CjBgSU-K.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cfg_1SLq.js";import"./useFocus-DCdhMrgy.js";import"./useFocusRing-DkmhKsWm.js";import"./useFocusable-Bb-ubJOz.js";import"./ContextMenuSection-D81CeDCG.js";import"./Popover-DsSNZzMW.js";import"./DialogTriggerView-GlI_-8yJ.js";import"./context-CdLDj7bD.js";import"./useStatic-DKuo4ovu.js";import"./RSPContexts-CaPgNpVT.js";import"./ClearPropsContextView-Ff-_bWul.js";import"./useControlledState-B0hr1ZXY.js";import"./FocusScope-CQY-r9mi.js";import"./useCollator-1chl5SyN.js";import"./VisuallyHidden-DX-N6FS4.js";import"./Collection-tycL-zcz.js";import"./CollectionBuilder-DsOEphd0.js";import"./context-BRTadV_G.js";import"./Separator-CnqlmT3o.js";import"./SelectionManager-BIdKqwjQ.js";import"./useEvent-DUrYkmv0.js";import"./Switch-TSGUx7eD.js";import"./useMakeFocusable-DOqtKzac.js";import"./useToggleState-GJ2JDvNb.js";import"./useFormReset-BdOLdhs-.js";import"./getActionGroupSlot-DfO33wTs.js";import"./Markdown-DHjMpwfa.js";import"./CodeBlock-BLwaDx2l.js";import"./CopyButton-BmLNpEUm.js";import"./Tooltip-_HLUk4pp.js";import"./react-children-utilities-CM2FQFQ8.js";import"./Heading-Do4p4EAu.js";import"./Heading-BzGwSJzV.js";import"./InlineCode-IqLEJJPE.js";import"./Link-ISZP19YG.js";import"./Separator-DJAav8Eb.js";import"./TextArea-DY343EzQ.js";import"./TextFieldBase-DNquX7f5.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-C72SkzYM.js";import"./TextField-DQk9fvM2.js";import"./Form-DnVdWn9l.js";import"./Group-BMNJ9slh.js";import"./Input-CLCKEIJY.js";import"./useTextField-BZVylDiv.js";import"./useFormValidation-BO_UVXRs.js";import"./ReactAriaControlledValueFix-CKJKlinu.js";import"./useManagedValue-_TsG-qZC.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Zr={title:"Integrations/React Hook Form/MarkdownEditor",component:c,render:()=>{const t=async b=>{await x(5e3),E(b)},F=d({defaultValues:{user:""}}),j=g();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(j,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var n,a,u;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(u=(a=i.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const $r=["Default","WithFocusAndError"];export{o as Default,i as WithFocusAndError,$r as __namedExportsOrder,Zr as default};
