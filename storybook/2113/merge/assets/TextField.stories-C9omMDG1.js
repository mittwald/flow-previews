import{j as e,r as E}from"./iframe-cN7Lzdqj.js";import{A as j}from"./ActionGroup-DX4E3UwM.js";import{B as f}from"./Button-BwVoLe8A.js";import{L as t}from"./Label-DyuE6_xN.js";import{S as b,s as p}from"./Section-DYu4NkMo.js";import{T as n,F as B}from"./Modal-BvOAVp6n.js";import{c as h,u,F as c,t as S}from"./Form-zS2RouYP.js";import{R as x,S as F}from"./ResetButton-BMtkxiIc.js";import"./index-nuYtCEEu.js";import"./dynamic-DQRqFpn-.js";import"./flowComponent-ClNnNn_u.js";import"./index-CXWzxOff.js";import"./clsx-B-dksMZM.js";import"./index-Bef0Wflz.js";import"./IconWarning-CUvGDlf1.js";import"./Text-BAPm9zxH.js";import"./browser-Bpxr7vqL.js";import"./utils-Dbx-ArCm.js";import"./EmulatedBoldText-BFt1sMFF.js";import"./LoadingSpinner-CTzp-c3F.js";import"./Button-BpQqb0nf.js";import"./ProgressBar-CMrNr0Rm.js";import"./Hidden-By4OwLil.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B7YjNia1.js";import"./useFocusRing-Q59ju1-g.js";import"./useFocusable-DoOUadEO.js";import"./useLocalizedStringFormatter-18qmqoa4.js";import"./context-dEL8T1DH.js";import"./RSPContexts-ClDg08BX.js";import"./Collection-r0rjmb-q.js";import"./CollectionBuilder-_LjgOwmd.js";import"./SelectionIndicator-C0yq45Os.js";import"./Separator-UtafTuzR.js";import"./useStatic-DPvlriRj.js";import"./FileCardList-Dra2QlnJ.js";import"./Avatar-C0Asp2HI.js";import"./AlertIcon-C-ExwOqO.js";import"./Image-BlZiNNFc.js";import"./Link-oX3ddIiA.js";import"./ControlledNotification-D1FOQGyy.js";import"./Flex-BoyQ6jvg.js";import"./Accordion-BMxO4mcN.js";import"./Alert-DRm0M_-I.js";import"./AlertBadge-CfRun1E8.js";import"./Align-IxMmEPNd.js";import"./AvatarStack-BoJnhU26.js";import"./BigNumber-CuAdmGiQ.js";import"./Breadcrumb-BkaPZxVT.js";import"./Heading-D9z7iTpY.js";import"./Legend-DfNTsat6.js";import"./Color-BKlRe18i.js";import"./TableFooterRow-NzFJ-M5U.js";import"./SkeletonText-DVQeD1Fq.js";import"./Content-D9H_HcvI.js";import"./CounterBadge-BMowvMS6.js";import"./DonutChart-Dcix-a4p.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8aSHTlq.js";import"./Header-Cqwjc9TR.js";import"./Initials-igV7Y7XO.js";import"./InlineCode-xANS0eJt.js";import"./LayoutCard-DaNXTyxD.js";import"./Separator-BbfT4Xvo.js";import"./MessageSeparator-DrM4lDRk.js";import"./NavigationGroup-B6pE0lML.js";import"./Notification-CgZQ9wbr.js";import"./NotificationProvider-CkbZ2iuD.js";import"./ProgressBar-C5OsEuon.js";import"./Rating-Bdupu4iU.js";import"./Skeleton-BvnGctBd.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ue={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async m=>{await p(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(n,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},s={},a={render:()=>{const o=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:o,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(n,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},l={render:()=>{const o=u();return E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(n,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:o=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await p(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(n,{...o,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(f,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(f,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    interface Values {
      name: string;
    }
    const handleOnSubmit = (values: Values) => {
      submitAction(values);
    };
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={handleOnSubmit}>
        <Section>
          <Field name="name">
            <TextField value={form.watch("name")} onChange={val => {
            form.setValue("name", val.toUpperCase());
          }}>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <ResetButton>Reset</ResetButton>
            <SubmitButton>Submit</SubmitButton>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField>
            <Label>Field</Label>
          </TextField>
        </Field>
        <TextField isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextField>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField {...props} type="email" inputMode="email">
            <Label>Field</Label>
          </TextField>
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
}`,...d.parameters?.docs?.source}}};const Ge=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,Ge as __namedExportsOrder,Ue as default};
