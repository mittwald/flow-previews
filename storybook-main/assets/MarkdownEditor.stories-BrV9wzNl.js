import{j as r,r as h}from"./iframe-B_2yjHsp.js";import{a as p,u as a,F as d,t as F}from"./Form-CVbH8ORe.js";import{L as s}from"./Label-CvwiNv20.js";import{B as m}from"./Button-Da-1LcXr.js";import{S as x}from"./Section-CUx_sSpw.js";import{A as E}from"./ActionGroup-DmSuXNY0.js";import{s as l}from"./Action-CxJM8pyz.js";import{m as n,F as j}from"./Modal-PQJN2LPe.js";import"./index-nuYtCEEu.js";import"./dynamic-BwNG8YI_.js";import"./flowComponent-BV7e4GQN.js";import"./index-CkiHuacM.js";import"./clsx-B-dksMZM.js";import"./index-D1oAZySF.js";import"./useLocalizedStringFormatter-tPwVT4HJ.js";import"./context-B3k2yYk7.js";import"./browser-CwXIoFOI.js";import"./utils-2cwPFhAn.js";import"./ProgressBar-D7qqep5T.js";import"./Hidden-CeFRPKf9.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CUKg7OTE.js";import"./Text-hvZATcoQ.js";import"./EmulatedBoldText-DedaqQcc.js";import"./LoadingSpinner-BGKVD4AF.js";import"./Button-NNWtmROB.js";import"./useFocusRing-ofK0sPix.js";import"./useFocusable-BOYBZXPk.js";import"./Dialog-0Z2XDu66.js";import"./RSPContexts-v1WzALnr.js";import"./OverlayArrow-P73E_zIs.js";import"./useControlledState-BCeVh08t.js";import"./Collection-Caw85O5m.js";import"./CollectionBuilder-CokeJ_11.js";import"./SelectionIndicator-Cf6NqUf0.js";import"./Separator-mHpTHZcJ.js";import"./getActionGroupSlot-BtC-t14k.js";import"./useStatic-BbFRD4mD.js";import"./context-RnBPL4A_.js";import"./Popover-S8IKDEQt.js";import"./OverlayTrigger-CLiMft97.js";import"./ControlledNotification-CcfPwfqM.js";import"./ClearPropsContextView-CmdRpvoP.js";import"./LayoutCard-BhX-o2o9.js";import"./Accordion-Dh1vAckq.js";import"./Alert-Ci2W8wzE.js";import"./AlertIcon-D8ErrYA_.js";import"./AlertBadge-N78J4b3B.js";import"./Align-D8GL4uT8.js";import"./TableFooterRow-BX4y_-af.js";import"./SkeletonText-C111BfZ6.js";import"./Avatar-rm9C52PR.js";import"./AvatarStack-CMXj5j1F.js";import"./Badge-BoOjuLxe.js";import"./BigNumber-DZOd7298.js";import"./Breadcrumb-Zcl647A0.js";import"./Link-CXGFKqOI.js";import"./Heading-DVX5TZYJ.js";import"./Legend-Xzl12hUm.js";import"./FileCardList-B0GAw7fP.js";import"./Image-CdGmt07t.js";import"./CodeBlock-CLeVAoiM.js";import"./CopyButton-CjZdUu_l.js";import"./Tooltip-MdQJtocT.js";import"./react-children-utilities-y5VJ4LYu.js";import"./Color-DKHA1RwH.js";import"./Content-CvxJ_sop.js";import"./ContextualHelpTrigger-BX1zaVS3.js";import"./CounterBadge-DEwK3SRS.js";import"./DonutChart-VHCCHD-7.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DoAI9HVS.js";import"./Header-BtyhIfrZ.js";import"./Initials-DtsdFviO.js";import"./InlineCode-1yfwAzwK.js";import"./LabeledValue-BQPVMimT.js";import"./PopoverTrigger-BYXXEk4H.js";import"./Markdown-fZ2Vfvpn.js";import"./Separator-D_ZzE7Mo.js";import"./Message-CWNMVrmW.js";import"./MessageSeparator-aQB3jYnu.js";import"./NavigationGroup-fMKk2wCS.js";import"./Notification-BrNaNkR3.js";import"./NotificationProvider-C2XVLjMN.js";import"./ProgressBar-CgPuZ0L-.js";import"./Rating-Nm9nVIK-.js";import"./Skeleton-C0TITtpv.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),oo={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async f=>{await l(5e3),g(f)},u=a({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const to=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,to as __namedExportsOrder,oo as default};
