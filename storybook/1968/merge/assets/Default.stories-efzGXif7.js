import{j as r}from"./iframe-ybIflQI0.js";import{u as H,a0 as S,Z as b,E as v,a1 as B}from"./IconWarning-4calfh7J.js";import{L as m}from"./Link-DQPFgx-Y.js";import{H as s}from"./HeaderNavigation-Dzh4oyPZ.js";import{B as o}from"./Button-VpIHCJ_t.js";import{T as p}from"./Text-CrQihJYy.js";import{I as C}from"./Image-19zqdkmF.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DAwyOqSg.js";import{a as y,C as A,M as c}from"./ContextMenuContent-oeAC8jk0.js";import"./ContextMenuSection-D4VjSJDg.js";import{a as D,M as E}from"./Modal-0it-mBfQ.js";import{H as G}from"./Heading-D42xUANC.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dby21Boo.js";import"./mergeRefs-CrLlo2X9.js";import"./index-DwvqtJ63.js";import"./useLocalizedStringFormatter-Dy9YCgnm.js";import"./context-D69S0q1x.js";import"./utils-DwLBuKNl.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BBpVmfp-.js";import"./useFocus-FOKKrJ32.js";import"./useFocusRing-DmeoHCon.js";import"./useFocusable-D9slAbEH.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-DYvsivqr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Bsxotqki.js";import"./ProgressBar-BI13LgYi.js";import"./Label-dqzpDUen.js";import"./Hidden-DQD7tqWN.js";import"./useLabel-OuLiew89.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BlU6H4Cg.js";import"./EmulatedBoldText-Cg6573Jk.js";import"./Text-BtP71xLD.js";import"./AlertIcon-DL97duIW.js";import"./Action-CNi-ghwN.js";import"./context-cR8QzHfh.js";import"./useStatic-CBdef3Wq.js";import"./getActionGroupSlot-CImKUmyK.js";import"./Popover-Ck6kog5-.js";import"./DialogTriggerView-B2JbNUMV.js";import"./Dialog-sjXOwmAJ.js";import"./RSPContexts-18Yw4rTl.js";import"./OverlayArrow-D5ITEh8W.js";import"./useControlledState-BVmYQtS6.js";import"./Collection-BzQkilIm.js";import"./CollectionBuilder-CIbJownJ.js";import"./Separator-DelM8Vlp.js";import"./Group-vP_Qg5M8.js";import"./SearchField-CmuGphBb.js";import"./FieldError-C5asJdTF.js";import"./Form-CSA4Adn7.js";import"./useTextField-ClpDCKui.js";import"./useFormReset-B-8-_0w7.js";import"./TextField--sxCbEe1.js";import"./useEvent-BtRl6L9d.js";import"./SelectionManager-BKQdldWX.js";import"./useCollator-D-IRcrcA.js";import"./FocusScope-Ogf1gBEU.js";import"./VisuallyHidden-DZp-AQjS.js";import"./Switch-CTo2JY8E.js";import"./Label-D6VCnmf_.js";import"./useToggleState-DAn-IXTK.js";import"./Overlay-DAbCbV4I.js";import"./ButtonView-DX46BUi-.js";import"./Heading-D-wBWx4k.js";const Xr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Xr as default};
