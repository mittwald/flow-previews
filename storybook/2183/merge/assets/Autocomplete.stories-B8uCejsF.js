import{j as r,r as S}from"./iframe-B9DmQEvm.js";import{u as c,F as d,t as b,b as h}from"./Form-BXf4vgVp.js";import{R as F,S as x}from"./ResetButton-BQp3TiJa.js";import{B as f}from"./Button-Dm4Gj0Ue.js";import{S as E,s as u}from"./Section-C_OhuZda.js";import{A as T}from"./ActionGroup-BPBZMd0G.js";import{c as i,T as l,g as B,O as y}from"./TimeField-BCrDwFv1.js";import{L as p}from"./Label-CdjTRCcN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D9zzs7eg.js";import"./PropsContextProvider-D4WQNPB7.js";import"./mergeRefs-D6R5gGm4.js";import"./index-CFtXvdW-.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BIKdkDCX.js";import"./context-f4__Yrtg.js";import"./browser-B5MMVHjZ.js";import"./utils-Oe4-zNeB.js";import"./IconWarning-DHbLseiS.js";import"./remote-pOc8vwOE.js";import"./Text-DWnECR1V.js";import"./EmulatedBoldText-CcFQw1kW.js";import"./LoadingSpinner-CoK93z8B.js";import"./Button-aNJWqsMX.js";import"./ProgressBar-2zujtr-f.js";import"./Hidden-CljRM6Hn.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CcbQunlU.js";import"./useFocusable-CWuYRGi_.js";import"./context-CWF20r0U.js";import"./RSPContexts-CotCKDbU.js";import"./Collection-hhJxclBU.js";import"./CollectionBuilder-BT6nUxaY.js";import"./SelectionIndicator-DK0swjPr.js";import"./Separator-CBfW85A4.js";import"./useStatic-D5S9NXQn.js";import"./Accordion-D4jAtFpD.js";import"./Alert-C2lbq4BB.js";import"./AlertIcon-DNW_OXFb.js";import"./AlertBadge-C6Me14oL.js";import"./Align-DPuLyLOo.js";import"./Popover-UpR8ui09.js";import"./OverlayTrigger-BPc83cwF.js";import"./TableFooterRow-B35Rsrml.js";import"./SkeletonText-ZPaTyog7.js";import"./Avatar-Bx2ST7JM.js";import"./AvatarStack-_PkufGBz.js";import"./Badge-DmsrCf-1.js";import"./BigNumber-DHP9TJHn.js";import"./Breadcrumb-LOJeBKLO.js";import"./Link-DZQzqDqQ.js";import"./Heading-DwjnBE1G.js";import"./Legend-Bh3IkHhT.js";import"./FileCardList-BAmcrG49.js";import"./Image-BrfuIr9u.js";import"./Color-DhQB_epS.js";import"./Content-JADEg-IW.js";import"./ContextualHelpTrigger-dKYi-1DA.js";import"./CounterBadge-Cls8KRo_.js";import"./DonutChart-B9esqjeH.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DEET8u9H.js";import"./Header-DeL33C6q.js";import"./Initials-Dn2eAsB4.js";import"./InlineCode-C2pHeQEX.js";import"./PopoverTrigger-BccW7zFf.js";import"./Separator-fewq4lm1.js";import"./Message-CS9r66Cj.js";import"./MessageSeparator-B3ZhQOA7.js";import"./NavigationGroup-bOs2Paa-.js";import"./Notification-D4DyPezB.js";import"./NotificationProvider-HN69aTqY.js";import"./ProgressBar-CZYj1IvA.js";import"./Rating-BgHH720o.js";import"./Skeleton-xhKc-iSZ.js";const{action:A}=__STORYBOOK_MODULE_ACTIONS__,w=A("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(y,{value:t,textValue:t,children:t},t)}),zr={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async g=>{await u(1500),w(g)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Jr as __namedExportsOrder,zr as default};
