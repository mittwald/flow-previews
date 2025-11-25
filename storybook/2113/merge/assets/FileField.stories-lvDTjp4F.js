import{j as r,r as x}from"./iframe-cN7Lzdqj.js";import{c as l,u as a,F as c,t as j}from"./Form-zS2RouYP.js";import{L as s}from"./Label-DyuE6_xN.js";import{R as p,S as d}from"./ResetButton-BMtkxiIc.js";import{B as t}from"./Button-BwVoLe8A.js";import{S,s as u}from"./Section-DYu4NkMo.js";import{A as b}from"./ActionGroup-DX4E3UwM.js";import{s as m,F as B}from"./Modal-BvOAVp6n.js";import"./index-nuYtCEEu.js";import"./dynamic-DQRqFpn-.js";import"./flowComponent-ClNnNn_u.js";import"./index-CXWzxOff.js";import"./clsx-B-dksMZM.js";import"./index-Bef0Wflz.js";import"./useLocalizedStringFormatter-18qmqoa4.js";import"./context-B7YjNia1.js";import"./browser-Bpxr7vqL.js";import"./utils-Dbx-ArCm.js";import"./ProgressBar-CMrNr0Rm.js";import"./Hidden-By4OwLil.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CUvGDlf1.js";import"./Text-BAPm9zxH.js";import"./EmulatedBoldText-BFt1sMFF.js";import"./LoadingSpinner-CTzp-c3F.js";import"./Button-BpQqb0nf.js";import"./useFocusRing-Q59ju1-g.js";import"./useFocusable-DoOUadEO.js";import"./context-dEL8T1DH.js";import"./RSPContexts-ClDg08BX.js";import"./Collection-r0rjmb-q.js";import"./CollectionBuilder-_LjgOwmd.js";import"./SelectionIndicator-C0yq45Os.js";import"./Separator-UtafTuzR.js";import"./useStatic-DPvlriRj.js";import"./FileCardList-Dra2QlnJ.js";import"./Avatar-C0Asp2HI.js";import"./AlertIcon-C-ExwOqO.js";import"./Image-BlZiNNFc.js";import"./Link-oX3ddIiA.js";import"./ControlledNotification-D1FOQGyy.js";import"./Flex-BoyQ6jvg.js";import"./Accordion-BMxO4mcN.js";import"./Alert-DRm0M_-I.js";import"./AlertBadge-CfRun1E8.js";import"./Align-IxMmEPNd.js";import"./AvatarStack-BoJnhU26.js";import"./BigNumber-CuAdmGiQ.js";import"./Breadcrumb-BkaPZxVT.js";import"./Heading-D9z7iTpY.js";import"./Legend-DfNTsat6.js";import"./Color-BKlRe18i.js";import"./TableFooterRow-NzFJ-M5U.js";import"./SkeletonText-DVQeD1Fq.js";import"./Content-D9H_HcvI.js";import"./CounterBadge-BMowvMS6.js";import"./DonutChart-Dcix-a4p.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8aSHTlq.js";import"./Header-Cqwjc9TR.js";import"./Initials-igV7Y7XO.js";import"./InlineCode-xANS0eJt.js";import"./LayoutCard-DaNXTyxD.js";import"./Separator-BbfT4Xvo.js";import"./MessageSeparator-DrM4lDRk.js";import"./NavigationGroup-B6pE0lML.js";import"./Notification-CgZQ9wbr.js";import"./NotificationProvider-CkbZ2iuD.js";import"./ProgressBar-C5OsEuon.js";import"./Rating-Bdupu4iU.js";import"./Skeleton-BvnGctBd.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Gr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Hr as __namedExportsOrder,Gr as default};
