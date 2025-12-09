import{j as r,r as x}from"./iframe-BqP6npnu.js";import{b as m,u as a,F as p,t as E}from"./Form-D7KFnqtM.js";import{L as s}from"./Label-Dvn9fxen.js";import{R as u,S as c}from"./ResetButton-Br_fJDuM.js";import{B as l}from"./Button-CINxW6TG.js";import{S as j,s as d}from"./Section-BgyjzhPc.js";import{A as b}from"./ActionGroup-DkEZCvBM.js";import{r as n,g}from"./TimeField-CfFM0LAi.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-S48VUeic.js";import"./PropsContextProvider-r-rgdyuu.js";import"./mergeRefs-BMwdHSSJ.js";import"./index-Bfa1LViZ.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BHml1YCA.js";import"./context-Dpv25OMu.js";import"./browser-DXN0P2CK.js";import"./utils-Co5LfTVH.js";import"./ProgressBar-DCp0FWd7.js";import"./Hidden-s6oF_Zfg.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DbZ28gHF.js";import"./remote-CSf0dxK4.js";import"./Text-DywGJIRt.js";import"./EmulatedBoldText-Htc9gLg0.js";import"./LoadingSpinner-C4lBONmO.js";import"./Button-Cqxj8v2u.js";import"./useFocusRing-D-9NYYvk.js";import"./useFocusable-CcDlosxd.js";import"./context-WZRL0rNv.js";import"./RSPContexts-DNFW1N-a.js";import"./Collection-DiwcfHI2.js";import"./CollectionBuilder-Bxx5R3mQ.js";import"./SelectionIndicator-C0u1Mx-Z.js";import"./Separator-CD09dtZh.js";import"./useStatic-BDpTt2fP.js";import"./Accordion-spl5epLr.js";import"./Alert-DDe2aHVZ.js";import"./AlertIcon-D6OwT7OR.js";import"./AlertBadge-BDjWZOe3.js";import"./Align-DGoxUnnr.js";import"./Popover-weX1_5w_.js";import"./OverlayTrigger-kHGfUlCD.js";import"./TableFooterRow-DE-kA3m3.js";import"./SkeletonText-wjzRGxSG.js";import"./Avatar-CG6X940b.js";import"./AvatarStack-CGiknhkD.js";import"./Badge-CbvcsGSe.js";import"./BigNumber-CbaoHXSC.js";import"./Breadcrumb-Bk12IqNH.js";import"./Link-d1M47Kmn.js";import"./Heading-Dc3wJcTH.js";import"./Legend-CLq0DkHM.js";import"./FileCardList-CMNbaDEr.js";import"./Image-Bzt2Nbsw.js";import"./Color-B6n4dvbc.js";import"./Content-Dz6fNrX7.js";import"./ContextualHelpTrigger-CYLItONs.js";import"./CounterBadge-shrozi75.js";import"./DonutChart-CHPfrUyM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Ccc6Ijre.js";import"./Header-CiylrxZe.js";import"./Initials-Bcwc3vJF.js";import"./InlineCode-BUxkWh74.js";import"./PopoverTrigger-gkUZ0oSI.js";import"./Separator-CATwKm_c.js";import"./Message-D8K-Im88.js";import"./MessageSeparator-DNMph2bZ.js";import"./NavigationGroup-CsN8a96z.js";import"./Notification-Ddl9cNgw.js";import"./NotificationProvider-DI6lihFR.js";import"./ProgressBar-CMJ4ivwe.js";import"./Rating-1epREFBF.js";import"./Skeleton-CfQhGXNU.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Nr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Ur as __namedExportsOrder,Nr as default};
