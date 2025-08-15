import{j as r}from"./iframe-ChOLfm48.js";import{u as H,a2 as S,_ as b,K as v,a3 as B}from"./IconWarning-BSUZvRGT.js";import{L as m}from"./Link-BLboc8Or.js";import{H as s}from"./HeaderNavigation-lbFmfH85.js";import{B as o}from"./Button-B4rVmYfF.js";import{T as p}from"./Text-C5EipuV_.js";import{I as C}from"./Image-C3-vEdaF.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-BGTGYnop.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DXaM1Io-.js";import"./ContextMenuSection-CuB4UKw9.js";import{a as D,M as G}from"./Modal-BHFGe2tq.js";import{H as _}from"./Heading-BOvfWU_Z.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-bWieavHe.js";import"./mergeRefs-B21zPNPU.js";import"./index-GRCPXwug.js";import"./useLocalizedStringFormatter-k197sm3v.js";import"./context-DA6DtsVb.js";import"./utils-YDvgcPpP.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CNl9HBfO.js";import"./useFocus-DMe4XyoT.js";import"./useFocusRing-DPdWCN0f.js";import"./useFocusable-B1fc-Qnz.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CVKVUr-K.js";import"./Button-BHJ4uNPj.js";import"./ProgressBar-C09E4iv2.js";import"./Label-DXrtAbBw.js";import"./Hidden-DmBctQal.js";import"./useLabel-CsHZNL1P.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-DWi47IAH.js";import"./EmulatedBoldText-DdFIKcy_.js";import"./Text-Sl4cdtSO.js";import"./AlertIcon-DEtpMwX7.js";import"./Action-mjOEx1pm.js";import"./context-CLjENUX9.js";import"./useStatic-ZU4u6g9v.js";import"./getActionGroupSlot-BFZbab6X.js";import"./Popover-C-SsS0OD.js";import"./DialogTriggerView-D5enS8PQ.js";import"./Dialog-LDu6X4iJ.js";import"./RSPContexts-C8KeXTpg.js";import"./OverlayArrow-PXUzuxoY.js";import"./useControlledState-Dmz-xjYt.js";import"./Collection-BYYSTjrH.js";import"./CollectionBuilder-BFso7U7_.js";import"./Separator-DEQT6UbO.js";import"./Group-DfdPT8Gy.js";import"./SearchField-CiSMqBGJ.js";import"./FieldError-JlwACqz9.js";import"./Form-CA_oHzJs.js";import"./useTextField-DWlRW7Y8.js";import"./useFormReset-2KspnF8x.js";import"./TextField-BNJiEHR6.js";import"./useEvent-BFXA3T9F.js";import"./SelectionManager-CQRDuBDt.js";import"./useCollator-BSIYhoOJ.js";import"./FocusScope-DwqEaNE4.js";import"./VisuallyHidden-eytsr0lz.js";import"./Switch-C7WqBQVS.js";import"./Label-BjFpMJsX.js";import"./useToggleState-DOioO2mg.js";import"./Overlay-BwFqFZJJ.js";import"./ButtonView-am1E71Ee.js";import"./Heading-GN5MY3Gv.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(_,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
