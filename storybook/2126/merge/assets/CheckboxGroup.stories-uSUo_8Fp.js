import{j as r,r as j}from"./iframe-sw6YBGs2.js";import{a as u,u as h,F as d,t as v}from"./Form-DmMVlFwM.js";import{L as i}from"./Label-CmtT7DCN.js";import{B as c}from"./Button-C3vsBXq_.js";import{S as f}from"./Section-l8vn1XNi.js";import{A as O}from"./ActionGroup-BXh7v2Sj.js";import{s as x}from"./Action-_btOP2lG.js";import{q as n,n as e,p as b,F as k}from"./Modal-DxgoLEUd.js";import"./index-nuYtCEEu.js";import"./dynamic-DI3ra1Po.js";import"./flowComponent-9kUQeyVn.js";import"./index-CQ8O5V0p.js";import"./clsx-B-dksMZM.js";import"./index-DXtHeKIw.js";import"./useLocalizedStringFormatter-D1DdJ7gx.js";import"./context-C55dwVSC.js";import"./browser-CM4mIXp1.js";import"./utils-DUnEZ_OM.js";import"./ProgressBar-LVLLuOf0.js";import"./Hidden-CsbjM4Ab.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Mo4x9W3y.js";import"./Text-BcvoGUvL.js";import"./EmulatedBoldText-2hgsjV1R.js";import"./LoadingSpinner-Bc_cKoW-.js";import"./Button-C9KiGU0p.js";import"./useFocusRing-CuXwNFI9.js";import"./useFocusable-D0OMOiNw.js";import"./Dialog-vQ1BmT5h.js";import"./RSPContexts-DsElqAB8.js";import"./OverlayArrow-BmDyVYWZ.js";import"./useControlledState-PLdRfTwy.js";import"./Collection-DRfKzRSF.js";import"./CollectionBuilder-CLa01cON.js";import"./SelectionIndicator-BR2LstrO.js";import"./Separator-DJH-J0YQ.js";import"./getActionGroupSlot-xCaZiuyA.js";import"./useStatic-3-oc9s-0.js";import"./context-D0JPrgtB.js";import"./Popover-CTuN8o_O.js";import"./OverlayTrigger-C_lKypBz.js";import"./ControlledNotification-BkuRpHzl.js";import"./ClearPropsContextView-DJhzMu7H.js";import"./LayoutCard-Cde2ypQu.js";import"./Accordion-BjIhC8Tw.js";import"./Alert-BrKf053k.js";import"./AlertIcon-DOBK5Qiy.js";import"./AlertBadge-Da7lIov6.js";import"./Align-Dz3OnvDk.js";import"./TableFooterRow-D8f9k0PV.js";import"./SkeletonText-CEL6wZBd.js";import"./Avatar-Kdd9ynB9.js";import"./AvatarStack-D0wFHkKp.js";import"./Badge-BabXZ_Zc.js";import"./BigNumber-DI_V9sbr.js";import"./Breadcrumb-DhhKvw_9.js";import"./Link-CMSh3a4Z.js";import"./Heading-BjeBhvap.js";import"./Legend-VgLIiYH1.js";import"./FileCardList-i5G6_w3p.js";import"./Image-sZiUBJ99.js";import"./CodeBlock-BNcfhLIz.js";import"./CopyButton-lHl1l64h.js";import"./Tooltip-DVn6jUem.js";import"./react-children-utilities-kN0pvQuw.js";import"./Color-CTvY4oH2.js";import"./Content-B9ARa_I0.js";import"./ContextualHelpTrigger-DwcqWH2n.js";import"./CounterBadge-Bs1DA-RH.js";import"./DonutChart-Behnkh0T.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CkwoWD1S.js";import"./Header-BuQdBlmy.js";import"./Initials-eZxDYNMo.js";import"./InlineCode-Dk1HCl3v.js";import"./LabeledValue-vT0Jzwlv.js";import"./PopoverTrigger-DmY7SQcC.js";import"./Markdown-DKYCkIEk.js";import"./Separator-Dex5_wmj.js";import"./Message-CtaJAHUw.js";import"./MessageSeparator-2Ri2MJ87.js";import"./NavigationGroup-Bm3sI2jt.js";import"./Notification-CjFKT80j.js";import"./NotificationProvider-LaKC0ems.js";import"./ProgressBar-DTrtZgpj.js";import"./Rating-DaBt_gtM.js";import"./Skeleton-B7reKJec.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,F=C("submit"),te={title:"Integrations/React Hook Form/CheckboxGroup",component:u,render:()=>{const s=async t=>{await x(1500),F(t)},o=h({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),m=v();return r.jsx(d,{form:o,onSubmit:s,children:r.jsxs(f,{children:[r.jsx(m,{name:"interests",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsDefaultValue",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check at least 1 item"})]})}),r.jsx(m,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check max 2 items"})]})}),r.jsx(O,{children:r.jsx(c,{type:"submit",children:"Submit"})})]})})}},a={},l={render:s=>{const o=h();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"}),r.jsx(k,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:s=>{const o=h();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
        </Field>
        <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} isInvalid {...props}>
          <Label>Options</Label>
          <Checkbox value="1">Option 1</Checkbox>
          <Checkbox value="2">Option 2</Checkbox>
          <Checkbox value="3">Option 3</Checkbox>
          <Checkbox value="4">Option 4</Checkbox>
          <Checkbox value="5">Option 5</Checkbox>
          <Checkbox value="6">Option 6</Checkbox>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxGroup>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
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
}`,...p.parameters?.docs?.source}}};const ie=["Default","WithFieldError","WithFocus"];export{a as Default,l as WithFieldError,p as WithFocus,ie as __namedExportsOrder,te as default};
