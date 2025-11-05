import{j as r,r as h}from"./iframe-B0zV29Ol.js";import{a as p,u as a,F as d,t as F}from"./Form-C77AFJS3.js";import{L as s}from"./Label-CO7dcuDN.js";import{B as m}from"./Button-DMc7qjuD.js";import{S as x}from"./Section-c6k8H6l6.js";import{A as E}from"./ActionGroup-x0yzCgdG.js";import{s as l}from"./Action-D4O6uaws.js";import{m as n,F as j}from"./Modal-CjWjucPV.js";import"./index-nuYtCEEu.js";import"./dynamic-BDcWjd3V.js";import"./flowComponent-BsAK2ls3.js";import"./index-BYMF1jLH.js";import"./clsx-B-dksMZM.js";import"./index-Bap8DgrM.js";import"./useLocalizedStringFormatter-DAIqrt-k.js";import"./context-CJ74nGTM.js";import"./browser-D-MgOzku.js";import"./utils-rMLWZEZ9.js";import"./ProgressBar-BR-tdA5k.js";import"./Hidden-CLtGdy91.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DElUfIyP.js";import"./Text-DNMpJh06.js";import"./EmulatedBoldText-Z1g7CMab.js";import"./LoadingSpinner-91ddITMV.js";import"./Button-B7c7aZAn.js";import"./useFocusRing-BkkYWklx.js";import"./useFocusable-CfhrO7WS.js";import"./Dialog-CW1wDwL9.js";import"./RSPContexts-C-9bKQ2R.js";import"./OverlayArrow-CvdWoYZq.js";import"./useControlledState-BMTFuSH8.js";import"./Collection-xKdqQ5gP.js";import"./CollectionBuilder-CGg5wqK9.js";import"./SelectionIndicator-BwpruQVu.js";import"./Separator-DZUrDISg.js";import"./getActionGroupSlot-CT-ODnzp.js";import"./useStatic-CBy74o7G.js";import"./context-UMFNSY2K.js";import"./Popover-D1TtYLmJ.js";import"./OverlayTrigger-Bi2UH0iH.js";import"./ControlledNotification-DjEB_H58.js";import"./ClearPropsContextView-DoK20Ig-.js";import"./LayoutCard-BpoFrQi6.js";import"./Accordion-BzC4nNU-.js";import"./Alert-CYBL3WAx.js";import"./AlertIcon-C4QVJ3jz.js";import"./AlertBadge-NbeQvqGG.js";import"./Align-CqKWkhSS.js";import"./TableFooterRow-CC_ko3N8.js";import"./SkeletonText-D9EW_GgS.js";import"./Avatar-YRFl0AXp.js";import"./AvatarStack-21HFF-yb.js";import"./Badge-VD94JE7p.js";import"./BigNumber-CHXNC1Jz.js";import"./Breadcrumb-DOEz6B-8.js";import"./Link-CXiCVjqZ.js";import"./Heading-DWho-b1a.js";import"./Legend-Cipm40qu.js";import"./FileCardList-DqUU9P5F.js";import"./Image-CIQLgEEc.js";import"./CodeBlock-DWiDUE3v.js";import"./CopyButton-CXPEUJji.js";import"./Tooltip-C70bKdpZ.js";import"./react-children-utilities-D2PRRlI6.js";import"./Color-DgZP7MPp.js";import"./Content-ByGcGhCL.js";import"./ContextualHelpTrigger-BH-AywGu.js";import"./CounterBadge-83Oosp8g.js";import"./DonutChart-Bg_cE2a6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D7GonCXS.js";import"./Header-95pkJ2a4.js";import"./Initials-BdpPEY0M.js";import"./InlineCode-CO--Wx6Z.js";import"./LabeledValue-B75o_32R.js";import"./PopoverTrigger-CF0yGiLp.js";import"./Markdown-Bd7-dk-r.js";import"./Separator-BLAV0fah.js";import"./Message-DmO3EG3E.js";import"./MessageSeparator-CIFoWUWf.js";import"./NavigationGroup-6FYJowsC.js";import"./Notification-Bao42zCB.js";import"./NotificationProvider-CzLBmS1d.js";import"./ProgressBar-D-Sdoekq.js";import"./Rating-CraoL8Qg.js";import"./Skeleton-CpnSw1eA.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),oo={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async f=>{await l(5e3),g(f)},u=a({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
