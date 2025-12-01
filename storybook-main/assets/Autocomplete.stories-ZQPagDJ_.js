import{j as r,r as S}from"./iframe-2LgrIkRd.js";import{u as c,F as d,t as b,b as h}from"./Form-D82Xz59o.js";import{R as F,S as x}from"./ResetButton-BHcgh5P3.js";import{B as f}from"./Button-Cq_XMZKZ.js";import{S as E,s as u}from"./Section-BlB_8KjT.js";import{A as T}from"./ActionGroup-ByO56kJD.js";import{c as i,T as l,g as B,O as y}from"./TimeField-D5pHgFYZ.js";import{L as p}from"./Label-DREYQWel.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DCrPXVv3.js";import"./PropsContextProvider-Dvn5KZwR.js";import"./mergeRefs-BKadv8uE.js";import"./index-KXg12Vs8.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-dwl9VKwt.js";import"./context-CE6tX24V.js";import"./browser-DE_neHhx.js";import"./utils-BnxtooML.js";import"./IconWarning-D60ymTiJ.js";import"./Text-CmoFb8XW.js";import"./EmulatedBoldText-DybYTyQs.js";import"./LoadingSpinner-C9JNq8vi.js";import"./Button-EKWPB4tZ.js";import"./ProgressBar-DflgbsT0.js";import"./Hidden-8HkCLqkF.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DVyMMICP.js";import"./useFocusable-DWcchIDQ.js";import"./context-lHzLNF7G.js";import"./RSPContexts-Dor-CtSJ.js";import"./Collection-CsQEIojc.js";import"./CollectionBuilder-CXt63XdS.js";import"./SelectionIndicator-BqSKYRxe.js";import"./Separator-DQkcls0b.js";import"./useStatic-yAY0kCCB.js";import"./Accordion-CyEZGz5t.js";import"./Alert-fpXXpeEV.js";import"./AlertIcon-5TMA0R6D.js";import"./AlertBadge-DD7luv0F.js";import"./Align-C4SFZ7ME.js";import"./Popover-BsRqhSlP.js";import"./OverlayTrigger-CbpE00TN.js";import"./TableFooterRow-CUlgLSqo.js";import"./SkeletonText-BGsYoe3X.js";import"./Avatar-C4UmcXDE.js";import"./AvatarStack-B-BstC3Q.js";import"./Badge-BgCXtZ0L.js";import"./BigNumber-CVZSlJts.js";import"./Breadcrumb-C_L5ewoM.js";import"./Link-BdaxMzeJ.js";import"./Heading-DilTAoZJ.js";import"./Legend-fylTc-bA.js";import"./FileCardList-CrJP7G2S.js";import"./Image-OXpu_gFV.js";import"./Color-BYYxr454.js";import"./Content-NoHT_5O2.js";import"./ContextualHelpTrigger-TtfataTj.js";import"./CounterBadge-CFnk4a6U.js";import"./DonutChart-DInnhXKC.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-S15YJh2T.js";import"./Header-DRDABVjU.js";import"./Initials-CWWZSIcH.js";import"./InlineCode-FHoqqrut.js";import"./PopoverTrigger-Cj-rCTR6.js";import"./Separator-Bqiy7SnE.js";import"./Message-cn2BI7mT.js";import"./MessageSeparator-CfbbRyt-.js";import"./NavigationGroup-DuKvOMC6.js";import"./Notification-BGXUVOCQ.js";import"./NotificationProvider-Cexjnfj1.js";import"./ProgressBar-D0rsyG47.js";import"./Rating-IUsLANbY.js";import"./Skeleton-TGcUA8kF.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,w=A("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(y,{value:t,textValue:t,children:t},t)}),Yr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async g=>{await u(1500),w(g)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        <Autocomplete {...props}>
          <TextField isInvalid>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,zr as __namedExportsOrder,Yr as default};
