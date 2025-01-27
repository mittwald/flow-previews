import{R as e,r as H}from"./index-B-o1Wr-g.js";import{L as r}from"./Label-D1gQZv67.js";import{O as o,S as J}from"./CountryOptions-BtuRq1xE.js";import{F as M}from"./FieldDescription-DL_UboA3.js";import{F as P}from"./FieldError-Chn1-6sB.js";import{C as m}from"./ComboBox-DIsg-iqm.js";import{S as Q}from"./Section-CrvhOWtx.js";import{C as U}from"./ColumnLayout-3vFBx2eH.js";import{T as X}from"./TextField-Cf20RXSe.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./flowComponent-Bz6Io0hO.js";import"./index-DolzVqEf.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Label-CqgmsInd.js";import"./utils-7gTBvjqH.js";import"./Hidden-CRdWNeH8.js";import"./IconApp-3W3XzCjg.js";import"./IconWarning-CxL-YAPF.js";import"./Popover-COWctmtn.js";import"./OverlayTrigger-K_SGs4A-.js";import"./context-CtwQP4Yz.js";import"./useSelector-Cb4sc2b-.js";import"./Dialog-4DVrVcAA.js";import"./Button-CFfO75lD.js";import"./ProgressBar-BQAJCbMD.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BXVt7Q_3.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-CuXMKzfT.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-C4vObYq_.js";import"./Text-R-rrVGxo.js";import"./SelectionManager-D5qS5Dhh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./ListBox-Cf_-0Lu9.js";import"./DragAndDrop-1_tMLeAb.js";import"./useListState-DxMClvEm.js";import"./FieldError-Dc7wTCBj.js";import"./Form-CS2x0aS5.js";import"./useSingleSelectListState-DAzuMU52.js";import"./useFormReset-DMREOE0P.js";import"./Text-9mML8Z29.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Wrap-DQq6jo70.js";import"./Button-DfqfA7xf.js";import"./LoadingSpinner-BQNky5o5.js";import"./Group-BaWKqaXG.js";import"./Input-In3k7nSs.js";import"./useFilter-D8aoKDms.js";import"./useTextField-BGTL6xBV.js";import"./ContextMenuSection-BlI2bv0B.js";import"./Action-v-b0G_7k.js";import"./getActionGroupSlot-DVGp_tC1.js";import"./dynamic-DKDa4OpU.js";import"./TextFieldBase-D_d6TStX.js";const uo={title:"Form Controls/ComboBox",component:m,render:n=>e.createElement(m,{...n},e.createElement(r,null,"Domain"),e.createElement(o,null,"mydomain.de"),e.createElement(o,null,"shop.mydomain.de"),e.createElement(o,null,"anotherdomain.com"),e.createElement(o,null,"www.anotherdomain.com"),e.createElement(o,null,"anotherdomain.com/shop"),e.createElement(o,null,"anotherdomain.com/blog"),e.createElement(o,null,"onemoredomain.de"),e.createElement(o,null,"www.onemoredomain.de"))},s={},d={args:{isDisabled:!0}},c={args:{isRequired:!0}},u={render:n=>e.createElement(m,{...n},e.createElement(r,null,"Domain"),e.createElement(o,null,"mydomain.de"),e.createElement(o,null,"shop.mydomain.de"),e.createElement(o,null,"anotherdomain.com"),e.createElement(o,null,"www.anotherdomain.com"),e.createElement(o,null,"anotherdomain.com/shop"),e.createElement(o,null,"anotherdomain.com/blog"),e.createElement(o,null,"onemoredomain.de"),e.createElement(o,null,"www.onemoredomain.de"),e.createElement(M,null,"Select a domain"))},E={render:n=>e.createElement(m,{...n,defaultSelectedKey:"mydomain.de"},e.createElement(r,null,"Domain"),e.createElement(o,{value:"mydomain.de"},"mydomain.de"),e.createElement(o,null,"shop.mydomain.de"),e.createElement(o,null,"anotherdomain.com"),e.createElement(o,null,"www.anotherdomain.com"),e.createElement(o,null,"anotherdomain.com/shop"),e.createElement(o,null,"anotherdomain.com/blog"),e.createElement(o,null,"onemoredomain.de"),e.createElement(o,null,"www.onemoredomain.de"))},h={render:n=>e.createElement(m,{...n,isInvalid:!0,isRequired:!0},e.createElement(r,null,"Domain"),e.createElement(o,null,"mydomain.de"),e.createElement(o,null,"shop.mydomain.de"),e.createElement(o,null,"anotherdomain.com"),e.createElement(o,null,"www.anotherdomain.com"),e.createElement(o,null,"anotherdomain.com/shop"),e.createElement(o,null,"anotherdomain.com/blog"),e.createElement(o,null,"onemoredomain.de"),e.createElement(o,null,"www.onemoredomain.de"),e.createElement(P,null,"Select a domain to continue"))},O={render:n=>{const[t,w]=H.useState(),f=["a.de","b.de","c.de"],l=t!=null&&t.includes("@")?f.map((a,p)=>e.createElement(o,{id:p.toString(),key:p,value:(t==null?void 0:t.split("@")[0])+"@"+a},(t==null?void 0:t.split("@")[0])+"@"+a)):null;return console.log(l),e.createElement(Q,null,e.createElement(m,{...n,isRequired:!0,onInputChange:a=>w(a)},e.createElement(r,null,"Domain"),l),e.createElement(U,null,e.createElement(X,null,e.createElement(r,null,"Name")),e.createElement(J,{defaultSelectedKey:"@a.de"},e.createElement(r,null,"Domain"),e.createElement(o,{value:"@a.de"},"@a.de"),e.createElement(o,{value:"@b.de"},"@b.de"),e.createElement(o,{value:"@c.de"},"@c.de"))))}},b={render:n=>{const t=["home","var"],w=["home/www","home/backup","home/etc"],f=["var/foo","var/bar"],[l,a]=H.useState(t),p=l.map(i=>e.createElement(o,{key:i,value:i},i));return e.createElement(m,{...n,isRequired:!0,onSelectionChange:i=>{i==="home"&&a(w),i==="var"&&a(f)}},e.createElement(r,null,"Domain"),p)}};var S,g,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var D,v,C;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(v=d.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var F,L,x;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(x=(L=c.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var B,R,q;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <ComboBox {...props}>
      <Label>Domain</Label>
      <Option>mydomain.de</Option>
      <Option>shop.mydomain.de</Option>
      <Option>anotherdomain.com</Option>
      <Option>www.anotherdomain.com</Option>
      <Option>anotherdomain.com/shop</Option>
      <Option>anotherdomain.com/blog</Option>
      <Option>onemoredomain.de</Option>
      <Option>www.onemoredomain.de</Option>
      <FieldDescription>Select a domain</FieldDescription>
    </ComboBox>
}`,...(q=(R=u.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var k,W,V;E.parameters={...E.parameters,docs:{...(k=E.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <ComboBox {...props} defaultSelectedKey="mydomain.de">
      <Label>Domain</Label>
      <Option value="mydomain.de">mydomain.de</Option>
      <Option>shop.mydomain.de</Option>
      <Option>anotherdomain.com</Option>
      <Option>www.anotherdomain.com</Option>
      <Option>anotherdomain.com/shop</Option>
      <Option>anotherdomain.com/blog</Option>
      <Option>onemoredomain.de</Option>
      <Option>www.onemoredomain.de</Option>
    </ComboBox>
}`,...(V=(W=E.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var I,K,T;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <ComboBox {...props} isInvalid isRequired>
      <Label>Domain</Label>
      <Option>mydomain.de</Option>
      <Option>shop.mydomain.de</Option>
      <Option>anotherdomain.com</Option>
      <Option>www.anotherdomain.com</Option>
      <Option>anotherdomain.com/shop</Option>
      <Option>anotherdomain.com/blog</Option>
      <Option>onemoredomain.de</Option>
      <Option>www.onemoredomain.de</Option>
      <FieldError>Select a domain to continue</FieldError>
    </ComboBox>
}`,...(T=(K=h.parameters)==null?void 0:K.docs)==null?void 0:T.source}}};var N,_,j;O.parameters={...O.parameters,docs:{...(N=O.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState<string>();
    const domains = ["a.de", "b.de", "c.de"];
    const options = value?.includes("@") ? domains.map((d, i) => <Option id={i.toString()} key={i} value={value?.split("@")[0] + "@" + d}>
            {value?.split("@")[0] + "@" + d}
          </Option>) : null;
    console.log(options);
    return <Section>
        <ComboBox {...props} isRequired onInputChange={v => setValue(v)}>
          <Label>Domain</Label>
          {options}
        </ComboBox>
        <ColumnLayout>
          <TextField>
            <Label>Name</Label>
          </TextField>
          <Select defaultSelectedKey="@a.de">
            <Label>Domain</Label>
            <Option value="@a.de">@a.de</Option>
            <Option value="@b.de">@b.de</Option>
            <Option value="@c.de">@c.de</Option>
          </Select>
        </ColumnLayout>
      </Section>;
  }
}`,...(j=(_=O.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var z,A,G;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: props => {
    const files1 = ["home", "var"];
    const files2 = ["home/www", "home/backup", "home/etc"];
    const files3 = ["var/foo", "var/bar"];
    const [files, setFiles] = useState<string[]>(files1);
    const options = files.map(f => <Option key={f} value={f}>
        {f}
      </Option>);
    return <ComboBox {...props} isRequired onSelectionChange={v => {
      if (v === "home") {
        setFiles(files2);
      }
      if (v === "var") {
        setFiles(files3);
      }
    }}>
        <Label>Domain</Label>
        {options}
      </ComboBox>;
  }
}`,...(G=(A=b.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const Eo=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Emails","Files"];export{s as Default,d as Disabled,O as Emails,b as Files,c as Required,E as WithDefaultValue,u as WithFieldDescription,h as WithFieldError,Eo as __namedExportsOrder,uo as default};
