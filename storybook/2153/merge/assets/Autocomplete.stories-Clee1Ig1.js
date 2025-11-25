import{j as r,r as g}from"./iframe-B2xkRX6A.js";import{u as c,F as d,t as b,b as h}from"./Form-B_BdQBl8.js";import{R as F,S as x}from"./ResetButton-BJaJOnmZ.js";import{B as f}from"./Button-dkMnbJWG.js";import{S as E,s as u}from"./Section-Dun5Ah7E.js";import{A as T}from"./ActionGroup-BNpn1NX2.js";import{A as i,T as l,F as B,O as A}from"./Modal-CO2TWQss.js";import{L as a}from"./Label-BUxdBOic.js";import"./index-nuYtCEEu.js";import"./dynamic-D0Nrpf8a.js";import"./flowComponent-D639mhqg.js";import"./index-CgXs-3w1.js";import"./clsx-B-dksMZM.js";import"./index-Ddwq7UUc.js";import"./useLocalizedStringFormatter-CFLWoqqs.js";import"./context-0lXYs95B.js";import"./browser-QmAcXv_F.js";import"./utils-Bn0vlKhH.js";import"./IconWarning-D3UwWGLP.js";import"./Text-CCe4xaNb.js";import"./EmulatedBoldText-C1Q2Dtf3.js";import"./LoadingSpinner-kT-Lxibs.js";import"./Button-ZZalAwAh.js";import"./ProgressBar-B8kHCfIw.js";import"./Hidden-WUyQGACH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Bx_AG6Dt.js";import"./useFocusable-DULkbCFr.js";import"./context-D2PnJfRR.js";import"./RSPContexts-CwQQ0l-4.js";import"./Collection-Pjtcg2qL.js";import"./CollectionBuilder-VeHHQrjG.js";import"./SelectionIndicator-DaXywehL.js";import"./Separator-DixHCPqE.js";import"./useStatic-BtgzXQ8g.js";import"./FileCardList-ClKhcOXP.js";import"./Avatar-D9obBJsL.js";import"./AlertIcon-CEpZA0Vz.js";import"./Image-DmJWYSzI.js";import"./Link-BRl6hkBv.js";import"./ControlledNotification-DS-T__7q.js";import"./Flex-CvnfZlCm.js";import"./Accordion-CesJn3LP.js";import"./Alert-CEP0osH1.js";import"./AlertBadge-pEQTf4Bk.js";import"./Align-CP_BULLQ.js";import"./AvatarStack-B3-ZBtgK.js";import"./BigNumber-DSCSkpPt.js";import"./Breadcrumb-Ox30Nh91.js";import"./Heading-C47Y59gw.js";import"./Legend-CPHf_SU9.js";import"./Color-CRQqnv2Z.js";import"./TableFooterRow-BOTmu1mA.js";import"./SkeletonText-s3T3xbN2.js";import"./Content-CxihpQZ-.js";import"./CounterBadge-Cr8rMFp7.js";import"./DonutChart-DEAWEWe6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BrMCUhBk.js";import"./Header-Cmx_1A0G.js";import"./Initials-CiGsvn0n.js";import"./InlineCode-C_72mhO0.js";import"./LayoutCard-BYbleerS.js";import"./Separator-hUKHPUi5.js";import"./MessageSeparator-BjqeMdwr.js";import"./NavigationGroup-CLRQhA7L.js";import"./Notification-UiqXE8jo.js";import"./NotificationProvider-DbD6PgRm.js";import"./ProgressBar-CF2aMWk9.js";import"./Rating-DYTssgfH.js";import"./Skeleton-DC4X9OIQ.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),p=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(A,{value:t,textValue:t,children:t},t)}),Mr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsxs(i,{...o,isInvalid:!0,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),p(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <Autocomplete {...props} isInvalid>
          <TextField>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
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
}`,...n.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,n as WithFocus,Nr as __namedExportsOrder,Mr as default};
