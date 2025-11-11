import{r as b,j as r}from"./iframe-sw6YBGs2.js";import{a as c,u as f,F as h,t as w}from"./Form-DmMVlFwM.js";import{L as i}from"./Label-CmtT7DCN.js";import{B as o}from"./Button-C3vsBXq_.js";import{S as P}from"./Section-l8vn1XNi.js";import{A as y}from"./ActionGroup-BXh7v2Sj.js";import{s as F}from"./Action-_btOP2lG.js";import{ak as B,al as g,e as S,ac as n,am as t,an as E,F as C}from"./Modal-DxgoLEUd.js";import"./index-nuYtCEEu.js";import"./dynamic-DI3ra1Po.js";import"./flowComponent-9kUQeyVn.js";import"./index-CQ8O5V0p.js";import"./clsx-B-dksMZM.js";import"./index-DXtHeKIw.js";import"./useLocalizedStringFormatter-D1DdJ7gx.js";import"./context-C55dwVSC.js";import"./browser-CM4mIXp1.js";import"./utils-DUnEZ_OM.js";import"./ProgressBar-LVLLuOf0.js";import"./Hidden-CsbjM4Ab.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Mo4x9W3y.js";import"./Text-BcvoGUvL.js";import"./EmulatedBoldText-2hgsjV1R.js";import"./LoadingSpinner-Bc_cKoW-.js";import"./Button-C9KiGU0p.js";import"./useFocusRing-CuXwNFI9.js";import"./useFocusable-D0OMOiNw.js";import"./Dialog-vQ1BmT5h.js";import"./RSPContexts-DsElqAB8.js";import"./OverlayArrow-BmDyVYWZ.js";import"./useControlledState-PLdRfTwy.js";import"./Collection-DRfKzRSF.js";import"./CollectionBuilder-CLa01cON.js";import"./SelectionIndicator-BR2LstrO.js";import"./Separator-DJH-J0YQ.js";import"./getActionGroupSlot-xCaZiuyA.js";import"./useStatic-3-oc9s-0.js";import"./context-D0JPrgtB.js";import"./Popover-CTuN8o_O.js";import"./OverlayTrigger-C_lKypBz.js";import"./ControlledNotification-BkuRpHzl.js";import"./ClearPropsContextView-DJhzMu7H.js";import"./LayoutCard-Cde2ypQu.js";import"./Accordion-BjIhC8Tw.js";import"./Alert-BrKf053k.js";import"./AlertIcon-DOBK5Qiy.js";import"./AlertBadge-Da7lIov6.js";import"./Align-Dz3OnvDk.js";import"./TableFooterRow-D8f9k0PV.js";import"./SkeletonText-CEL6wZBd.js";import"./Avatar-Kdd9ynB9.js";import"./AvatarStack-D0wFHkKp.js";import"./Badge-BabXZ_Zc.js";import"./BigNumber-DI_V9sbr.js";import"./Breadcrumb-DhhKvw_9.js";import"./Link-CMSh3a4Z.js";import"./Heading-BjeBhvap.js";import"./Legend-VgLIiYH1.js";import"./FileCardList-i5G6_w3p.js";import"./Image-sZiUBJ99.js";import"./CodeBlock-BNcfhLIz.js";import"./CopyButton-lHl1l64h.js";import"./Tooltip-DVn6jUem.js";import"./react-children-utilities-kN0pvQuw.js";import"./Color-CTvY4oH2.js";import"./Content-B9ARa_I0.js";import"./ContextualHelpTrigger-DwcqWH2n.js";import"./CounterBadge-Bs1DA-RH.js";import"./DonutChart-Behnkh0T.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CkwoWD1S.js";import"./Header-BuQdBlmy.js";import"./Initials-eZxDYNMo.js";import"./InlineCode-Dk1HCl3v.js";import"./LabeledValue-vT0Jzwlv.js";import"./PopoverTrigger-DmY7SQcC.js";import"./Markdown-DKYCkIEk.js";import"./Separator-Dex5_wmj.js";import"./Message-CtaJAHUw.js";import"./MessageSeparator-2Ri2MJ87.js";import"./NavigationGroup-Bm3sI2jt.js";import"./Notification-CjFKT80j.js";import"./NotificationProvider-LaKC0ems.js";import"./ProgressBar-DTrtZgpj.js";import"./Rating-DaBt_gtM.js";import"./Skeleton-B7reKJec.js";const j=(e=B)=>{const a=b.useMemo(()=>g.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return S(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:V}=__STORYBOOK_MODULE_ACTIONS__,L=V("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[E.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),L(s)},a=f({defaultValues:{user:""}}),m=w();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(P,{children:[r.jsx(m,{name:"user",rules:{required:!0,validate:j()},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(y,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},l={},d={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:j(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(C,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation(policyDecl)
      }} name="password">
          <PasswordCreationField validationPolicy={policyDecl}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <PasswordCreationField defaultValue={""} isInvalid>
          <Label>Password</Label>
          <Button>asd</Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </PasswordCreationField>
        <PasswordCreationField defaultValue={""}>
          <Label>Password</Label>
          <Button>asd</Button>
        </PasswordCreationField>
      </Form>;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
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
}`,...p.parameters?.docs?.source}}};const de=["Default","WithForm","WithFieldError","WithFocus"];export{l as Default,u as WithFieldError,p as WithFocus,d as WithForm,de as __namedExportsOrder,le as default};
