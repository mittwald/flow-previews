import{j as r,r as x}from"./iframe-D4i-5dyB.js";import{c as l,u as a,F as c,t as j}from"./Form-Cc_8wvEi.js";import{L as s}from"./Label-CEhfQve0.js";import{R as u,S as d}from"./ResetButton-D8XhYTLV.js";import{B as t}from"./Button-C5iEQf44.js";import{S,s as p}from"./Section-B45bmdbE.js";import{A as b}from"./ActionGroup-DfaF4Ihs.js";import{r as m,g as B}from"./TimeField-CIDukiAs.js";import"./index-nuYtCEEu.js";import"./dynamic-l-Dsj5TR.js";import"./PropsContextProvider-BnDJ-hIk.js";import"./mergeRefs-BSb0Bje6.js";import"./index-BqFsReNE.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Csijhnwe.js";import"./context-C76p02_s.js";import"./browser-Cwp7r97w.js";import"./utils-BWp3lM8P.js";import"./ProgressBar-B4smC8yo.js";import"./Hidden-MqQXQobC.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CMFXnZAS.js";import"./Text-D-HEhYG-.js";import"./EmulatedBoldText-wsap70PU.js";import"./LoadingSpinner-DCo1rAvM.js";import"./Button-BNk2Wifn.js";import"./useFocusRing-BHC6C08N.js";import"./useFocusable-COObapRc.js";import"./context-JCcCR3kh.js";import"./RSPContexts-BOewTbeY.js";import"./Collection-E-HFRfBJ.js";import"./CollectionBuilder-C89H_4E6.js";import"./SelectionIndicator-BSmnnWZO.js";import"./Separator-BscBbSvj.js";import"./useStatic-CrV_XbcB.js";import"./getActionGroupSlot-CzwDHsH8.js";import"./Accordion-Dj0W5Sm2.js";import"./Alert-BxysIfVE.js";import"./AlertIcon-CoWnPqgJ.js";import"./AlertBadge-BCJFFVr-.js";import"./Align-CocHRqnc.js";import"./Popover-DY1u_i9c.js";import"./OverlayTrigger-D7YNoZK9.js";import"./TableFooterRow-BiDC_eis.js";import"./SkeletonText-BbzzKkxz.js";import"./Avatar-DYMDRQ8r.js";import"./AvatarStack-DbQ018zr.js";import"./Badge-DGIykoPb.js";import"./BigNumber-RSRBZBqi.js";import"./Breadcrumb-BFthghoN.js";import"./Link-BEGF2rB2.js";import"./Heading-CqgoaxDG.js";import"./Legend-KRzBJzCP.js";import"./FileCardList-BQXii2c7.js";import"./Image-BTNoRYQ7.js";import"./Color-Bghgw0aE.js";import"./Content-BMj6l0HC.js";import"./ContextualHelpTrigger-BRqpivsA.js";import"./CounterBadge-BbpTGMEL.js";import"./DonutChart-BnHSOvbV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-x47jZjZe.js";import"./Header-1VErbdaO.js";import"./Initials-CFmamtSv.js";import"./InlineCode-DaIVko3u.js";import"./PopoverTrigger-CYaHO_51.js";import"./Separator-D1GKViit.js";import"./Message-DJ9Qzwt8.js";import"./MessageSeparator-W1fEMKQv.js";import"./NavigationGroup-Di6mJdeB.js";import"./Notification-t1-j9nZN.js";import"./NotificationProvider-BqX1J7Mu.js";import"./ProgressBar-Def5jKMV.js";import"./Rating-DvqvLdBT.js";import"./Skeleton-B565HWGQ.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Nr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await p(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Ur as __namedExportsOrder,Nr as default};
