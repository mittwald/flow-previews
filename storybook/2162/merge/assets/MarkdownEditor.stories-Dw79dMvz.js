import{j as r,r as x}from"./iframe-CW_1kzn8.js";import{b as m,u as a,F as p,t as E}from"./Form-D25i7OyI.js";import{L as s}from"./Label-C6A80iGS.js";import{R as u,S as c}from"./ResetButton-BSjIWx2p.js";import{B as l}from"./Button-DG8ItREn.js";import{S as j,s as d}from"./Section-BtQd622a.js";import{A as b}from"./ActionGroup-CMigRbOL.js";import{r as n,g}from"./TimeField-O8dBCN92.js";import"./index-nuYtCEEu.js";import"./dynamic-CvIdWWig.js";import"./PropsContextProvider-BDCYw1pg.js";import"./mergeRefs-Y3najUVW.js";import"./index-Bd-98hnG.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-EKrbiiaf.js";import"./context-g9M5CTWm.js";import"./browser-DYjBW3Mh.js";import"./utils-DECz7q9i.js";import"./ProgressBar-BTbyCbiz.js";import"./Hidden-CnRTwBiV.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CwkyBxVN.js";import"./Text-Bt12Aiuy.js";import"./EmulatedBoldText-CjYCMvu1.js";import"./LoadingSpinner-DDEfeVZt.js";import"./Button-CKDlZl9E.js";import"./useFocusRing-DZCmxJCl.js";import"./useFocusable-f0CtUOQy.js";import"./context-FK80ZNI-.js";import"./RSPContexts-jLoiaaIz.js";import"./Collection-FH8-xfMl.js";import"./CollectionBuilder-NWtLcMXl.js";import"./SelectionIndicator-CiCiu2c2.js";import"./Separator-DjsPzP3_.js";import"./useStatic-CyHKbDme.js";import"./Accordion-C2JQB3aN.js";import"./Alert-wmQE4eTZ.js";import"./AlertIcon-C9ZLFLyq.js";import"./AlertBadge-DK8CoaVP.js";import"./Align-BVXc73zR.js";import"./Popover-CZewF29V.js";import"./OverlayTrigger-DXi_dQZe.js";import"./TableFooterRow-Dz133oSH.js";import"./SkeletonText-bNjOl8Lj.js";import"./Avatar-nxK6ayEs.js";import"./AvatarStack-C5K3zfKN.js";import"./Badge-B4vhdI6d.js";import"./BigNumber-BCtOXUOq.js";import"./Breadcrumb-UN90IgbC.js";import"./Link-BjJvsD30.js";import"./Heading-BDPW60Tv.js";import"./Legend-Dv9medtK.js";import"./FileCardList-BzJWWuzT.js";import"./Image-B8909EtY.js";import"./Color-yZsfwNHB.js";import"./Content-NVky5ofe.js";import"./ContextualHelpTrigger-NzhCC0hh.js";import"./CounterBadge-DRnfRmyT.js";import"./DonutChart-DfWQ2yNh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D_-uwk5j.js";import"./Header-CIgs80Lw.js";import"./Initials-CtZJGVAE.js";import"./InlineCode-BUUGDwVl.js";import"./PopoverTrigger-C7J2NazX.js";import"./Separator-CSUhftqZ.js";import"./Message-gD0LEZWb.js";import"./MessageSeparator-f8F7ZaUG.js";import"./NavigationGroup-kj_r2PG6.js";import"./Notification-Fp2frcIZ.js";import"./NotificationProvider-Cm0Lnyko.js";import"./ProgressBar-CKvf8kaJ.js";import"./Rating-BH2oI4ZI.js";import"./Skeleton-BlS-zqmu.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Kr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Nr as __namedExportsOrder,Kr as default};
