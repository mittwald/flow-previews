import{j as r}from"./iframe-C4UjBIAn.js";import{D as k,$ as S,X as b,H as v,a0 as B}from"./IconWarning-CY0XRw6B.js";import{L as m}from"./Link-BkOLogPX.js";import{H as s}from"./HeaderNavigation-Dy0tTOI9.js";import{B as o}from"./Button-5hDgeu62.js";import{T as p}from"./Text-Cl3jjQuQ.js";import{I as C}from"./Image-C11xmyMF.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Blvn4khL.js";import{a as D,C as y,M as c}from"./ContextMenuContent-12lj3f42.js";import"./ContextMenuSection-lnUae846.js";import{a as A,M as G}from"./Modal-Krcwd26L.js";import{H as E}from"./Heading-tEwIaik0.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-87DwQ7Go.js";import"./mergeRefs-COMEUDHn.js";import"./index-CmrBj9gN.js";import"./useLocalizedStringFormatter-Bj3RA7TV.js";import"./context-DFK0WUvU.js";import"./utils-BLjaUoJs.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-B9Tj2Vkc.js";import"./useFocus-BmYsiZmy.js";import"./useFocusRing-D6tBYznr.js";import"./useFocusable-DY-8mdaw.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BzraVxPM.js";import"./Button-5rCQqSRQ.js";import"./ProgressBar-BsRzG7g3.js";import"./Label-DUd9oGhN.js";import"./Hidden-DuKiE2Vy.js";import"./useLabel-BsCfOrtV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-DTcMqGMW.js";import"./EmulatedBoldText-CM9vl5us.js";import"./Text-CPgcCMNB.js";import"./AlertIcon-BexTRgVS.js";import"./Action-DIvU2Ms_.js";import"./context-B9xA30OO.js";import"./useStatic-DYGmZoo-.js";import"./getActionGroupSlot-Cs6H9gb3.js";import"./Popover-Dee7e1-Y.js";import"./DialogTriggerView-C4tTcH16.js";import"./Dialog-Tiii-4pl.js";import"./RSPContexts-CIyyPXTw.js";import"./OverlayArrow-BK55VNdR.js";import"./useControlledState-Cate5U5n.js";import"./Collection-YaGs-Nx7.js";import"./CollectionBuilder-BzI9Vgxs.js";import"./Separator-plBA_LWS.js";import"./Input-DYzTUFv2.js";import"./SearchField-BVimEZR8.js";import"./FieldError-V3TTSJrT.js";import"./Form-DZkb495z.js";import"./Group-DVLbnFER.js";import"./useTextField-CYEprWqj.js";import"./useFormReset-DguyA7pD.js";import"./TextField-_WSxaHpd.js";import"./SelectionManager-DBmgSDBD.js";import"./useEvent-tf06nvNZ.js";import"./useCollator-DRqhDAuW.js";import"./FocusScope-BprNCpdJ.js";import"./VisuallyHidden-DfrTtOS_.js";import"./Switch-WDIiN1XN.js";import"./Label-Dvf2CIG9.js";import"./useToggleState-DkhSXG62.js";import"./Overlay-BjlI9cyc.js";import"./Header-4dtAm8iI.js";import"./ButtonView-n29gH5pF.js";import"./Heading-DhTfsAKW.js";const Zr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(k,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(k,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,H;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(H=(T=n.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,Zr as default};
