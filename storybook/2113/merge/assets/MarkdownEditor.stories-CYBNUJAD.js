import{j as r,r as h}from"./iframe-D4AGuMnx.js";import{a as p,u as a,F as d,t as F}from"./Form-D11r0Dhg.js";import{L as s}from"./Label-Uu7W5RgC.js";import{B as m}from"./Button-DtTeM47l.js";import{S as x}from"./Section-C7ZxuYfk.js";import{A as E}from"./ActionGroup-CVIQhVAR.js";import{s as l}from"./Action-BJsLMg4b.js";import{m as n,F as j}from"./Modal-tGW6fwkz.js";import"./index-nuYtCEEu.js";import"./dynamic-oZwQWaGw.js";import"./flowComponent-BIyscBzo.js";import"./index-Cd_u2pV_.js";import"./clsx-B-dksMZM.js";import"./index-DNvdHJqk.js";import"./useLocalizedStringFormatter-BNVQM74q.js";import"./context-Bzk-5tqO.js";import"./browser-3OZPWisM.js";import"./utils-CqMmhAxq.js";import"./ProgressBar-_bs3wo-c.js";import"./Hidden-BnByJu4s.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BC3tK9kj.js";import"./Text-BtpbrdrH.js";import"./EmulatedBoldText-IEU2-xTn.js";import"./LoadingSpinner-u-oBwaFl.js";import"./Button-84EHC3SL.js";import"./useFocusRing-B0_rzNcg.js";import"./useFocusable-qdXI3c9W.js";import"./Dialog-Dct0khyO.js";import"./RSPContexts-B4Pxvc-Q.js";import"./OverlayArrow-DclzRyUb.js";import"./useControlledState-DvYaxqI_.js";import"./Collection-BeK_S4wY.js";import"./CollectionBuilder-CWpdOayg.js";import"./SelectionIndicator-D5j5oFjn.js";import"./Separator-YST-GtXN.js";import"./getActionGroupSlot-y53Ggupv.js";import"./useStatic-CK2cw9Tx.js";import"./context-DUgKYd_B.js";import"./Popover-dCAEc0Wh.js";import"./OverlayTrigger-Dm3E0-9T.js";import"./ControlledNotification-RGp8id5u.js";import"./ClearPropsContextView-BN-YBkpQ.js";import"./LayoutCard-DtuqdXZV.js";import"./Accordion-Ci8LO9GL.js";import"./Alert-DRlhPKAM.js";import"./AlertIcon-DIdf3aQ3.js";import"./AlertBadge-_JwpxNnD.js";import"./Align-7TnWq-Gv.js";import"./TableFooterRow-Dfn6es0D.js";import"./SkeletonText-Bz6UmpGu.js";import"./Avatar-Cuj_93mY.js";import"./AvatarStack-DXokn6ok.js";import"./Badge-BJDG9oB6.js";import"./BigNumber-Dhgfv4nR.js";import"./Breadcrumb-B79bCRw5.js";import"./Link-BLPRVcLK.js";import"./Heading-BsaQzqWp.js";import"./Legend-SmnDI-CC.js";import"./FileCardList-CHAaonsB.js";import"./Image-BkVvTdPU.js";import"./CodeBlock-C0V9miuL.js";import"./CopyButton-D7hetntY.js";import"./Tooltip-BSoUWhLw.js";import"./react-children-utilities-Cr8KMn7a.js";import"./Color-BvEEtghO.js";import"./Content-CrST6Q2Z.js";import"./ContextualHelpTrigger-Du-yR4dj.js";import"./CounterBadge-DGQicx2G.js";import"./DonutChart-DycP2oAV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BfL5ZHfz.js";import"./Header-ByxBqB9K.js";import"./Initials-Db_RIkxH.js";import"./InlineCode-DuyDsWxz.js";import"./LabeledValue-UbfXjNpO.js";import"./PopoverTrigger-CvAH8Qs9.js";import"./Markdown-m3hztiRY.js";import"./Separator-Bft2GaAL.js";import"./Message-CKIMU6VV.js";import"./MessageSeparator-EOk3gZe0.js";import"./NavigationGroup-dyXYy0re.js";import"./Notification-CH_kjSuU.js";import"./NotificationProvider-Yu7V6SyN.js";import"./ProgressBar-CF2CxjRB.js";import"./Rating-D2_jK4Ep.js";import"./Skeleton-Ju_lHyZD.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),oo={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async f=>{await l(5e3),g(f)},u=a({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
