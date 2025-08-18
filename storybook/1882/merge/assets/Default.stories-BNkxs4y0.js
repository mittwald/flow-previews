import{j as r}from"./iframe-BAtUELBR.js";import{u as H,a2 as S,_ as b,E as v,a3 as B}from"./IconWarning-h84dHhem.js";import{L as m}from"./Link-3PDTsx4r.js";import{H as s}from"./HeaderNavigation-DyJCoHub.js";import{B as o}from"./Button-BEq1XaV7.js";import{T as p}from"./Text-DzMLmIhZ.js";import{I as C}from"./Image-DFiE1RXM.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-C7MyfFir.js";import{a as y,C as A,M as c}from"./ContextMenuContent-C8v1VTMy.js";import"./ContextMenuSection-DceDQlVt.js";import{a as D,M as E}from"./Modal-DLDmP-9b.js";import{H as G}from"./Heading-WI-2mpz5.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cm-qlPij.js";import"./mergeRefs-CfY7cvkM.js";import"./index-CLr8lCXa.js";import"./useLocalizedStringFormatter-BRgbsD3G.js";import"./context-DbLHYHiQ.js";import"./utils-UbQMFgd1.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-B88qu-VD.js";import"./useFocus-DJUZ2En4.js";import"./useFocusRing-BdUFZX00.js";import"./useFocusable-BuN38nX6.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-Bs-ckq2L.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BiJPJvF0.js";import"./ProgressBar-BZ7qWBUr.js";import"./Label-DhaMlcU0.js";import"./Hidden-CDb1KA3j.js";import"./useLabel-DmioRyAZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BVtPTxgw.js";import"./EmulatedBoldText-CosrpHXB.js";import"./Text-j2Uyll_5.js";import"./AlertIcon-BmuSOhJl.js";import"./Action-DFFHrQF0.js";import"./context-B7yiaX0P.js";import"./useStatic-D26yqcd1.js";import"./getActionGroupSlot-BPPCyVYO.js";import"./Popover-4D2PTTn1.js";import"./DialogTriggerView-TQtuWl8o.js";import"./Dialog-CdEVLYW9.js";import"./RSPContexts-DQlzARDq.js";import"./OverlayArrow-CGwoImC3.js";import"./useControlledState-Cdm8pC1T.js";import"./Collection-DKvh5qnS.js";import"./CollectionBuilder-DOOg8umD.js";import"./Separator-BOj5W9de.js";import"./Group-BnQz7s-E.js";import"./SearchField-DJD_RJ9_.js";import"./FieldError-D0SFQKR_.js";import"./Form-D4YUCIIk.js";import"./useTextField-BD89Nm0g.js";import"./useFormReset-Cu48O1XS.js";import"./TextField-CA7eDuBl.js";import"./useEvent-DEdGGfK8.js";import"./SelectionManager-pSSWogs3.js";import"./useCollator-CMTT-Cpv.js";import"./FocusScope-CQU9T81i.js";import"./VisuallyHidden-CFnWwY81.js";import"./Switch-CTfhAnZs.js";import"./Label-QEHCu_aF.js";import"./useToggleState-BcvpSEE1.js";import"./Overlay-D-undUip.js";import"./ButtonView-oKENZZvg.js";import"./Heading-ByYwZp8f.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
